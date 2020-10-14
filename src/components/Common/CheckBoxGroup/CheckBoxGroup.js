import React from "react"

import { Checkbox } from "@components/Common"

import styles from "./CheckBoxGroup.module.css"

export function CheckBoxGroup({ singleSelect, options, title, callback }) {
  const type = singleSelect ? "radio" : "checkbox"
  return (
    <fieldset className={styles.CheckBoxGroup}>
      <legend className={`${styles.Title} h5 black`}>{title}</legend>
      {options.map(option => {
        const input = { ...option, type }
        return <Checkbox key={option.id} {...input} onChange={callback} />
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
