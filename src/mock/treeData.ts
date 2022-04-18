export interface TreeNodeModel {
  id: string;
  label: string;
  children?: TreeNodeModel[];
}
export const treeData: TreeNodeModel[] = [
  {
    id: "1",
    label: "1",
    children: [
      {
        id: "1-1",
        label: "1-1",
        children: [
          {
            id: "1-1-1",
            label: "1-1-1",
          },
        ],
      },
      {
        id: "1-2",
        label: "1-2",
        children: [
          {
            id: "1-2-1",
            label: "1-2-1",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "2",
    children: [
      {
        id: "2-1",
        label: "2-1",
        children: [
          {
            id: "2-1-1",
            label: "2-1-1",
          },
        ],
      },
    ],
  },
];
