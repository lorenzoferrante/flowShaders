import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type NumberInput = Node<{ label: string; value: number }, 'number-input'>;
export type AppNode = BuiltInNode | PositionLoggerNode | NumberInput;
