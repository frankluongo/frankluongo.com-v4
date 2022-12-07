import React from "react"

export const CheckBoxGroup = ({ singleSelect, options, title, callback }) => {
  const type = singleSelect ? "radio" : "checkbox"
  return (
    <fieldset className="margin-top:1 block-gap:0.5">
      <legend className="fs:20 bold margin-bottom:0.5">{title}</legend>
      {options.map(option => {
        return (
          <div key={option.id}>
            <input
              type={type}
              id={option.id}
              name={option.name}
              value={option.title}
              onChange={callback}
            />
            <label className="fs:16" htmlFor={option.id}>
              {option.title}
            </label>
          </div>
        )
      })}
    </fieldset>
  )
}

CheckBoxGroup.defaultProps = {
  singleSelect: false,
  title: "Test",
  options: [
    {
      id: "test-1",
      name: "test-1",
      title: "Test 1",
    },
    {
      id: "test-2",
      name: "test-2",
      title: "Test 2",
    },
    {
      id: "test-3",
      name: "test-3",
      title: "Test 3",
    },
    {
      id: "test-4",
      name: "test-4",
      title: "Test 4",
    },
  ],
}
