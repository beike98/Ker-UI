export interface TreeNodeModel {
  id: string;
  label: string;
  level: number;
  children?: TreeNodeModel[];
}
export const treeData: TreeNodeModel[] = [
  {
    id: '1',
    label: '1',
    level: 1,
    children: [
      {
        id: '1-1',
        label: '1-1',
        level:2,
        children: [
          {
            id: '1-1-1',
            label: '1-1-1',
            level:3,
          },
        ],
      },
      {
        id: '1-2',
        label: '1-2',
        level:2,
        children: [
          {
            id: '1-2-1',
            label: '1-2-1',
            level:3,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: '2',
    level:1,
    children: [
      {
        id: '2-1',
        label: '2-1',
        level:2,
        children: [
          {
            id: '2-1-1',
            label: '2-1-1',
            level:3,
          }
        ]
      },
    ],
  },
];
