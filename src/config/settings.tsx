import { IDashboardSettings } from "./IDashboardSettings"

const dashboardSettings:IDashboardSettings = {
  mode: "light",
  grid: {
    variation: 1,
  },
  header: {

  },
  sidebar: {
    variation: 1,
    menu: [
      {
        id: "general",
        name: "General",
        slug: "general",
        new: true,
      },
      {
        id: "charts",
        name: "Charts",
        slug: "charts",
        new: true,
      },
      {
        id: "tables",
        name: "Tables",
        slug: "tables",
        new: true,
      },
      {
        id: "general",
        name: "General",
        slug: "general",
        new: true,
      },
      {
        id: "general",
        name: "General",
        slug: "general",
        new: true,
      },
      {
        id: "components",
        name: "Components",
        slug: "components",
        new: false,
        children: [
          {
            id: "button",
            name: "Button",
            slug: "button"
          },
          {
            id: "select",
            name: "Select",
            slug: "select"
          },
          {
            id: "card",
            name: "Card",
            slug: "card"
          },
          {
            id: "input",
            name: "Input",
            slug: "input"
          },
          {
            id: "headings",
            name: "Headings",
            slug: "headings"
          },
          {
            id: "typography",
            name: "Typography",
            slug: "typography"
          },
        ]
      }
    ]
  },
}

export { dashboardSettings }
