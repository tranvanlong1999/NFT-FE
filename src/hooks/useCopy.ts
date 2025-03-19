import { useState } from 'react';
import { toast } from 'sonner';

type CopyFn = (text?: string) => void; // Return success

export function useCopy(withToast = true): [boolean, CopyFn] {
  const [copied, setCopied] = useState(false);

  const copy = async (textToCopy?: string) => {
    if (!textToCopy) return;

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      if (withToast) {
        toast.success('copied');
      }
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      setCopied(true);
      if (withToast) {
        toast.success('copied');
      }
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return [copied, copy];
}
