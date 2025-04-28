import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { NumberInput } from './NumberInputs';
import { AppNode } from './types';

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'number-input': NumberInput,
} satisfies NodeTypes;

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with Shader Flow' },
  },
  {
    id: 'e',
    type: 'number-input',
    position: { x: 0, y: 300 },
    data: { label: 'Float', value: 0 },
  },
];

