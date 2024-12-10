/**
 * Portfolio
 * Copyright (C) 2024 Maxim (https://github.com/max1mde)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

const Scroller = ({
  items,
  direction = "left",
  speed = "fast",
  className = "",
}) => {
  return (
    <div
      data-direction={direction}
      data-speed={speed}
      className={`scroller ${className}`}
    >
      <ul className="list-none m-0 px-0 scroller__inner">
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-highlight rounded-full text-sm shadow-sm shadow-black transition-opacity duration-1000 opacity-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scroller;