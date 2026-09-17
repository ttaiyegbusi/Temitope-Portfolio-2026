"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  indent?: boolean;
}

interface Group {
  type: "single" | "group";
  item?: TocItem;
  parent?: TocItem;
  children?: TocItem[];
}

export function CaseStudySidebar({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const groups: Group[] = [];
  let i = 0;
  while (i < items.length) {
    const item = items[i];
    if (!item.indent) {
      const children: TocItem[] = [];
      let j = i + 1;
      while (j < items.length && items[j].indent) {
        children.push(items[j]);
        j++;
      }
      if (children.length > 0) {
        groups.push({ type: "group", parent: item, children });
        i = j;
      } else {
        groups.push({ type: "single", item });
        i++;
      }
    } else {
      groups.push({ type: "single", item });
      i++;
    }
  }

  return (
    <nav className="sticky top-[120px] shrink-0 flex flex-col gap-1 w-[200px]">
      {groups.map((group) => {
        if (group.type === "single") {
          const item = group.item!;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left text-base transition-colors whitespace-nowrap ${
                activeId === item.id
                  ? "text-text-strong"
                  : "text-text-soft hover:text-text-sub"
              }`}
            >
              {item.label}
            </button>
          );
        }

        const parent = group.parent!;
        const children = group.children!;
        const childIds = children.map((c) => c.id);
        const isGroupActive =
          activeId === parent.id || childIds.includes(activeId);

        return (
          <div key={parent.id} className="flex flex-col gap-1">
            <button
              onClick={() => handleClick(parent.id)}
              className={`text-left text-base transition-colors whitespace-nowrap ${
                activeId === parent.id || isGroupActive
                  ? "text-text-strong"
                  : "text-text-soft hover:text-text-sub"
              }`}
            >
              {parent.label}
            </button>
            <div
              className="relative flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isGroupActive ? `${children.length * 36}px` : "0px",
                opacity: isGroupActive ? 1 : 0,
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stroke-soft" />
              {children.map((child) => {
                const isActive = activeId === child.id;
                return (
                  <div key={child.id} className="relative">
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-text-strong" />
                    )}
                    <button
                      onClick={() => handleClick(child.id)}
                      className={`text-left text-base transition-colors whitespace-nowrap pl-4 py-[3px] ${
                        isActive
                          ? "text-text-strong"
                          : "text-text-soft hover:text-text-sub"
                      }`}
                    >
                      {child.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
