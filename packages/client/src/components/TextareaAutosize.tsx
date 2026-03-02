import { useAtomValue } from 'jotai';
import { forwardRef, useLayoutEffect, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';
import { chatDirectionAtom } from '~/store';

export const TextareaAutosize = forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>(
  ({ placeholder, title, 'aria-label': ariaLabel, ...props }, ref) => {
    const [, setIsRerendered] = useState(false);
    const chatDirection = useAtomValue(chatDirectionAtom).toLowerCase();
    useLayoutEffect(() => setIsRerendered(true), []);
    const computedAriaLabel =
      ariaLabel ?? (typeof placeholder === 'string' ? placeholder : undefined) ?? title;

    return (
      <ReactTextareaAutosize
        dir={chatDirection}
        aria-label={computedAriaLabel}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    );
  },
);
