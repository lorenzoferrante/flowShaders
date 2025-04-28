import { useCallback, useState } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';

export function NumberInput({ id, data }: { id: string; data: { label: string; value: number } }) {
  const { updateNodeData } = useReactFlow();
  const [number, setNumber] = useState(data.value);

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const cappedNumber = Math.min(255, Math.max(0, parseInt(evt.target.value)));
    setNumber(cappedNumber);
    updateNodeData(id, { value: cappedNumber });
  }, []);

  return (
    <div className="react-flow__node-default number-input">
      <div>{data.label}</div>
      <input
        id={`number-${id}`}
        name="number"
        type="number"
        min="0"
        max="255"
        onChange={onChange}
        className="nodrag"
        value={number}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
