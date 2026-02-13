import { ComponentProps, FC } from "react"

export const Input: FC<ComponentProps<"input">> = ({ style, ...props }) => (
  <input
    style={{
      background: "#333",
      border: 0,
      fontSize: "1.5rem",
      outline: 0,
      padding: ".25rem .5rem",
      ...style,
    }}
    {...props}
  />
)

export const Label: FC<ComponentProps<"label">> = ({
  htmlFor,
  style,
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    style={{
      ...style,
    }}
    {...props}
  />
)

export const Field: FC<ComponentProps<"fieldset">> = ({ style, ...props }) => (
  <fieldset
    style={{
      border: "none",
      display: "flex",
      gap: ".5rem",
      justifyContent: "space-between",
      width: "100%",
      ...style,
    }}
    {...props}
  />
)

export const Button: FC<ComponentProps<"button">> = ({ style, ...props }) => (
  <button
    style={{
      background: "#333",
      border: 0,
      borderRadius: ".25rem",
      fontSize: "1.5rem",
      padding: ".25rem 1rem",
      width: "100%",
      ...style,
    }}
    {...props}
  />
)
