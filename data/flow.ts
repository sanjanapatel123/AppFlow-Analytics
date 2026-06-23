import type { Edge, Node } from "reactflow";

export type ScreenNodeData = {
  title: string;
  visitors: string;
  status: string;
  category: string;
  conversion: string;
};

export const flowNodes: Node<ScreenNodeData>[] = [
  {
    id: "home",
    position: { x: 0, y: 100 },
    data: {
      title: "Home",
      visitors: "4,820",
      status: "Active",
      category: "Landing",
      conversion: "12.4%",
    },
    type: "screenNode",
  },
  {
    id: "login",
    position: { x: 280, y: 0 },
    data: {
      title: "Login",
      visitors: "3,120",
      status: "Active",
      category: "Auth",
      conversion: "9.2%",
    },
    type: "screenNode",
  },
  {
    id: "profile",
    position: { x: 280, y: 220 },
    data: {
      title: "Profile",
      visitors: "1,420",
      status: "Active",
      category: "User",
      conversion: "6.8%",
    },
    type: "screenNode",
  },
  {
    id: "checkout",
    position: { x: 580, y: 0 },
    data: {
      title: "Checkout",
      visitors: "1,840",
      status: "Warning",
      category: "Purchase",
      conversion: "4.1%",
    },
    type: "screenNode",
  },
  {
    id: "payment",
    position: { x: 880, y: 0 },
    data: {
      title: "Payment",
      visitors: "980",
      status: "Error",
      category: "Purchase",
      conversion: "2.7%",
    },
    type: "screenNode",
  },
];

export const flowEdges: Edge[] = [
  {
    id: "e1",
    source: "home",
    target: "login",
    animated: true,
  },
  {
    id: "e2",
    source: "home",
    target: "profile",
    animated: true,
  },
  {
    id: "e3",
    source: "login",
    target: "checkout",
    animated: true,
  },
  {
    id: "e4",
    source: "checkout",
    target: "payment",
    animated: true,
  },
];
