/** @jsxImportSource theme-ui */
import React from "react"

type Props = {
  data: {
    subitems: any[],
    href: string,
    title: string
  }
}

const RefItem = (props: Props) => {
  const { data } = props
  const subs = "subitems" in data && data.subitems.length > 0 ? true : false
  return (
    <React.Fragment>
      <li>
        {data.hasOwnProperty("href") && data.href.length > 0 ? (
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "ggrey", textDecoration: "none", backgroundColor: "#eee" }}
          >
            {data.title}
          </a>
        ) : (
          <span>{data.title}</span>
        )}
      </li>
      {subs && (
        <ul>
          {data.subitems.map((subitem, index) => (
            <RefItem key={index} data={subitem} />
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

export default RefItem
