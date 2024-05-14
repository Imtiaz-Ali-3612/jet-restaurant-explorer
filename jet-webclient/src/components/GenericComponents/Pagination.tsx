import React from 'react';
import { Pagination, PaginationItemType, PaginationItemRenderProps, cn } from '@nextui-org/react';
import { ChevronIcon } from './ChevronIcon';
import './GenericComponent.css';
interface PaginationComponentInterface {
  total: number;
  currentPage: number;
  updatePageNumber: (pageNumber: number) => void;
}
const PaginationComponent: React.FC<PaginationComponentInterface> = ({
  total,
  currentPage,
  updatePageNumber,
}) => {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps<HTMLButtonElement>) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
          onClick={() => {
            onNext();
            updatePageNumber(currentPage + 1);
          }}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
          onClick={() => {
            onPrevious();
            updatePageNumber(currentPage - 1);
          }}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        key={key}
        className={cn(
          className,
          currentPage === value &&
            'text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold active',
        )}
        onClick={() => updatePageNumber(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={total}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  );
};

export default PaginationComponent;
