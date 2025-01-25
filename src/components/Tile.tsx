import { ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

export type TileProps = {
  tooltip?: string;
  children?: ReactNode;
};

export const Tile = ({ tooltip, children }: TileProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top',
  });

  return (
    <div
      className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <div ref={setReferenceElement} className="relative flex justify-center items-center w-full h-full">
        {children}
      </div>
      {tooltip && isTooltipVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="z-10 bg-black text-white text-xs rounded-lg px-2 py-1 shadow-lg"
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};
