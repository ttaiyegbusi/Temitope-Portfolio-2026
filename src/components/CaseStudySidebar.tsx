"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

interface SubGroup {
  parent: TocItem;
  children: TocItem[];
}

interface FeatureGroup {
  parent: TocItem;
  subGroups: SubGroup[];
  leaves: TocItem[];
  allIds: string[];
}

type Node =
  | { type: "item"; item: TocItem }
  | { type: "group"; group: FeatureGroup };

function buildGroup(parent: TocItem, children: TocItem[]): FeatureGroup {
  const subGroups: SubGroup[] = [];
  const leaves: TocItem[] = [];
  let k = 0;
  while (k < children.length) {
    const child = children[k];
    if (child.level === 1) {
      const grandChildren: TocItem[] = [];
      let m = k + 1;
      while (m < children.length && children[m].level === 2) {
        grandChildren.push(children[m]);
        m++;
      }
      if (grandChildren.length > 0) {
        subGroups.push({ parent: child, children: grandChildren });
      } else {
        leaves.push(child);
      }
      k = m;
    } else {
      k++;
    }
  }
  return {
    parent,
    subGroups,
    leaves,
    allIds: [parent.id, ...children.map((c) => c.id)],
  };
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

  // Parse items into an ordered list of nodes. A top-level item followed by
  // level 1/2 items becomes its own independent, collapsible feature group.
  const nodes: Node[] = [];
  let i = 0;
  while (i < items.length) {
    const item = items[i];
    if (!item.level) {
      if (i + 1 < items.length && items[i + 1].level) {
        const children: TocItem[] = [];
        let j = i + 1;
        while (j < items.length && items[j].level) {
          children.push(items[j]);
          j++;
        }
        nodes.push({ type: "group", group: buildGroup(item, children) });
        i = j;
      } else {
        nodes.push({ type: "item", item });
        i++;
      }
    } else {
      i++;
    }
  }

  return (
    <nav className="sticky top-[120px] shrink-0 flex flex-col gap-1 w-[200px]">
      {nodes.map((node) => {
        if (node.type === "item") {
          const item = node.item;
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

        const { parent, subGroups, leaves, allIds } = node.group;
        const isGroupActive = allIds.includes(activeId);

        return (
          <div key={parent.id} className="flex flex-col gap-1">
            <button
              onClick={() => handleClick(parent.id)}
              className={`text-left text-base transition-colors whitespace-nowrap ${
                isGroupActive
                  ? "text-text-strong"
                  : "text-text-soft hover:text-text-sub"
              }`}
            >
              {parent.label}
            </button>

            {/* Single vertical line container for this group's items */}
            <div
              className="relative flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isGroupActive ? "1200px" : "0px",
                opacity: isGroupActive ? 1 : 0,
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stroke-soft" />

              {subGroups.map((sg) => {
                const sgIds = [sg.parent.id, ...sg.children.map((c) => c.id)];
                const isSgActive = sgIds.includes(activeId);

                return (
                  <div key={sg.parent.id}>
                    <div className="relative flex items-center">
                      {isSgActive && (
                        <div className="absolute left-0 w-[2px] h-[20px] bg-text-strong" />
                      )}
                      <button
                        onClick={() => handleClick(sg.parent.id)}
                        className={`text-left text-base transition-colors whitespace-nowrap pl-4 py-[3px] ${
                          isSgActive
                            ? "text-text-strong"
                            : "text-text-soft hover:text-text-sub"
                        }`}
                      >
                        {sg.parent.label}
                      </button>
                    </div>

                    <div
                      className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isSgActive
                          ? `${sg.children.length * 32}px`
                          : "0px",
                        opacity: isSgActive ? 1 : 0,
                      }}
                    >
                      {sg.children.map((child) => {
                        const isActive = activeId === child.id;
                        return (
                          <button
                            key={child.id}
                            onClick={() => handleClick(child.id)}
                            className={`text-left text-sm transition-colors whitespace-nowrap pl-8 py-[3px] ${
                              isActive
                                ? "text-text-strong"
                                : "text-text-soft hover:text-text-sub"
                            }`}
                          >
                            {child.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {leaves.map((leaf) => {
                const isActive = activeId === leaf.id;
                return (
                  <div key={leaf.id} className="relative flex items-center">
                    {isActive && (
                      <div className="absolute left-0 w-[2px] h-[20px] bg-text-strong" />
                    )}
                    <button
                      onClick={() => handleClick(leaf.id)}
                      className={`text-left text-base transition-colors whitespace-nowrap pl-4 py-[3px] ${
                        isActive
                          ? "text-text-strong"
                          : "text-text-soft hover:text-text-sub"
                      }`}
                    >
                      {leaf.label}
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
