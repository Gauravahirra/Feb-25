
import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react';

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex h-12 w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
        className
      )}
    >
      <SelectPrimitive.Value />
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Content className="glass-card border border-white/20 p-1">
      {children}
    </SelectPrimitive.Content>
  </SelectPrimitive.Root>
));
Select.displayName = 'Select';

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-lg py-2 px-3 text-sm text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none',
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

export { Select, SelectItem };
