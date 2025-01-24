import { useState } from 'react';
import { usePopper } from 'react-popper';

export type CardProps = {
  src?: string;
  tooltip?: string;
  isFlipped?: boolean;
};

export const Card = ({ src, tooltip, isFlipped = false }: CardProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top',
  });

  return (
    <div
      className="relative aspect-w-1 aspect-h-1 w-full max-w-xs"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <div ref={setReferenceElement}>
        {src && (
          <img
            src={isFlipped ? src : '/assets/card_back.png'}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        )}
      </div>
      {isFlipped && tooltip && isTooltipVisible && (
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
