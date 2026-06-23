"use client";

import { useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Edge,
  type Node,
  type NodeMouseHandler,
} from "reactflow";
import "reactflow/dist/style.css";

import GraphCard from "./GraphCard";
import FlowNode from "./FlowNode";
import { flowNodes, flowEdges, type ScreenNodeData } from "@/data/flow";

const nodeTypes = {
  screenNode: FlowNode,
};

function getStatusStyles(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400";
    case "Warning":
      return "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400";
    case "Error":
      return "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400";
    default:
      return "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300";
  }
}

export default function AppFlowGraph() {
  const [search, setSearch] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("home");

  const selectedNode = useMemo(() => {
    return flowNodes.find((node) => node.id === selectedNodeId) || null;
  }, [selectedNodeId]);

  const connectedNodeIds = useMemo(() => {
    if (!selectedNodeId) return [];

    const ids = new Set<string>();

    flowEdges.forEach((edge) => {
      if (edge.source === selectedNodeId) ids.add(edge.target);
      if (edge.target === selectedNodeId) ids.add(edge.source);
    });

    return Array.from(ids);
  }, [selectedNodeId]);

  const filteredNodeIds = useMemo(() => {
    if (!search.trim()) return flowNodes.map((node) => node.id);

    return flowNodes
      .filter((node) =>
        node.data.title.toLowerCase().includes(search.toLowerCase()),
      )
      .map((node) => node.id);
  }, [search]);

  const visibleNodeIds = useMemo(() => {
    if (!search.trim()) return new Set(flowNodes.map((node) => node.id));

    const ids = new Set<string>(filteredNodeIds);

    filteredNodeIds.forEach((id) => {
      flowEdges.forEach((edge) => {
        if (edge.source === id) ids.add(edge.target);
        if (edge.target === id) ids.add(edge.source);
      });
    });

    return ids;
  }, [filteredNodeIds, search]);

  const nodes: Node[] = useMemo(() => {
    return flowNodes
      .filter((node) => visibleNodeIds.has(node.id))
      .map((node) => ({
        ...node,
        data: {
          ...node.data,
          isSelected: node.id === selectedNodeId,
        },
        style: {
          opacity:
            search.trim() && !filteredNodeIds.includes(node.id) ? 0.45 : 1,
        },
      }));
  }, [selectedNodeId, visibleNodeIds, search, filteredNodeIds]);

  const edges: Edge[] = useMemo(() => {
    return flowEdges
      .filter(
        (edge) =>
          visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target),
      )
      .map((edge) => {
        const isConnectedToSelected =
          selectedNodeId &&
          (edge.source === selectedNodeId || edge.target === selectedNodeId);

        return {
          ...edge,
          animated: isConnectedToSelected,
          style: {
            stroke: isConnectedToSelected ? "#111827" : "#a1a1aa",
            strokeWidth: isConnectedToSelected ? 2.5 : 1.5,
            opacity: search.trim() ? 1 : 0.9,
          },
        };
      });
  }, [selectedNodeId, visibleNodeIds, search]);

  const handleNodeClick: NodeMouseHandler = (_, node) => {
    setSelectedNodeId(node.id);
  };

  const connectedScreens = flowNodes.filter((node) =>
    connectedNodeIds.includes(node.id),
  );

  return (
    <GraphCard
      title="App Screen Flow Graph"
      subtitle="Search nodes, inspect connected screens, and explore app navigation paths"
    >
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <input
          type="text"
          placeholder="Search screen node..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          rounded-xl
          border
          border-zinc-300
          bg-white
          px-4
          py-2.5
          text-sm
          outline-none
          focus:border-black
          dark:border-zinc-700
          dark:bg-zinc-950
          dark:focus:border-white
          lg:max-w-sm
          "
        />

        <div className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{flowNodes.length} nodes</span>
          <span>{flowEdges.length} edges</span>
          <span>{connectedNodeIds.length} connected</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.4fr_360px]">
        <div className="h-[620px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            onNodeClick={handleNodeClick}
          >
            <MiniMap />
            <Controls />
            <Background gap={16} size={1} />
          </ReactFlow>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
          {selectedNode ? (
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  Selected Node
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {selectedNode.data.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {selectedNode.data.category} screen in the product flow
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Visitors
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {selectedNode.data.visitors}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Conversion
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {selectedNode.data.conversion}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">Status</p>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusStyles(
                    selectedNode.data.status,
                  )}`}
                >
                  {selectedNode.data.status}
                </span>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">Connected Screens</p>

                <div className="space-y-3">
                  {connectedScreens.length > 0 ? (
                    connectedScreens.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        px-4
                        py-3
                        text-left
                        transition
                        hover:border-black
                        dark:border-zinc-800
                        dark:bg-zinc-900
                        dark:hover:border-white
                        "
                      >
                        <div>
                          <p className="font-medium">{node.data.title}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            {node.data.category}
                          </p>
                        </div>

                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {node.data.visitors}
                        </span>
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      No connected screens found.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Select a node to inspect details.
            </p>
          )}
        </div>
      </div>
    </GraphCard>
  );
}
