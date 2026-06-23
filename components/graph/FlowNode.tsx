import { Handle, Position } from "reactflow";

type FlowNodeProps = {
  data: {
    title: string;
    visitors: string;
    status: string;
    category?: string;
    conversion?: string;
    isSelected?: boolean;
  };
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

export default function FlowNode({ data }: FlowNodeProps) {
  return (
    <div
      className={`
      min-w-[200px]
      rounded-2xl
      border
      p-4
      shadow-md
      transition
      ${
        data.isSelected
          ? "border-black ring-2 ring-black/10 dark:border-white dark:ring-white/20"
          : "border-zinc-200 dark:border-zinc-800"
      }
      bg-white
      dark:bg-zinc-950
      `}
    >
      <Handle type="target" position={Position.Left} />

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold">{data.title}</h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {data.category || "Screen node"}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Visitors
          </span>
          <span className="text-sm font-medium">{data.visitors}</span>
        </div>

        {data.conversion && (
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Conversion
            </span>
            <span className="text-sm font-medium">{data.conversion}</span>
          </div>
        )}

        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusStyles(
            data.status,
          )}`}
        >
          {data.status}
        </span>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
