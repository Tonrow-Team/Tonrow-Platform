"use strict";
import domGenerator from "dom-generator";
import "./sidebar.scss";

/**
 * Generates and controls the sidebar component.
 *
 * @param {Array<Object>} headerData - Data to populate the sidebar component.
 * @returns {HTMLElement} - The created sidebar element.
 */
export default function sidebar(headerData) {
  // Generate sidebar content
  const sidebarGenerator = domGenerator({
    tag: "div",
    attributes: { id: "sidebar", class: "sidebar" },
    children: [
      // Sidebar logo
      {
        tag: "div",
        attributes: { class: "sidebar-logo" },
        children: [
          {
            tag: "img",
            attributes: { src: headerData[0].imgAddress, alt: "Logo" },
          },
          { tag: "div", attributes: { class: "line" } },
        ],
      },
      // Sidebar content (links)
      {
        tag: "div",
        attributes: { class: "sidebar-content" },
        children: headerData.slice(1).map((item) => ({
          tag: "a",
          properties: { textContent: item.linkText },
          attributes: { href: item.LinkAddress || "#" },
        })),
      },
      // Additional links (if not public)
      !headerData[0].public
        ? {
            tag: "div",
            attributes: { class: "additional-links" },
            children: [
              {
                tag: "a",
                properties: { textContent: "خروج از حساب" },
                attributes: { href: "#logout" },
              },
            ],
          }
        : null,
    ].filter((child) => child !== null),
  });

  document.body.appendChild(sidebarGenerator); // Append sidebar to the body

  // Create overlay div
  const overlayDiv = domGenerator({
    tag: "div",
    attributes: { class: "overlay" },
  });
  document.body.appendChild(overlayDiv); // Append overlay to the body

  /**
   * Checks if the sidebar is open.
   *
   * @returns {boolean} - Whether the sidebar is open.
   */
  function isSidebarOpen() {
    const sidebar = document.getElementById("sidebar");
    return sidebar.classList.contains("open");
  }

  /**
   * Toggles sidebar and overlay visibility.
   */
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isOpen = isSidebarOpen();
    const overlay = document.querySelector(".overlay"); // Select the overlay

    if (isOpen) {
      sidebar.classList.remove("open"); // Close the sidebar
      overlay.style.display = "none"; // Hide the overlay
    } else {
      sidebar.classList.add("open"); // Open the sidebar
      overlay.style.display = "block"; // Show the overlay
    }
  }

  // Event listener to toggle sidebar
  const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");
  if (sidebarToggleIcon) {
    sidebarToggleIcon.addEventListener("click", toggleSidebar);
  }

  // Event listener to close sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");

    if (
      sidebar &&
      !sidebar.contains(event.target) &&
      !sidebarToggleIcon.contains(event.target) &&
      isSidebarOpen()
    ) {
      toggleSidebar();
    }
  });

  return sidebarGenerator; // Return the created sidebar element
}
