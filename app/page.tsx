"use client"

import { Button, Field, Input, Label } from "components/form"
import { FC, useState } from "react"

const Page: FC = () => {
  const [numberSet, setNumberSet] = useState<{
    binary: string
    decimal: string
    hexadecimal: string
  }>({ binary: "", decimal: "", hexadecimal: "" })
  return (
    <>
      <Field>
        <Label htmlFor="binary">2進数</Label>
        <Input
          id="binary"
          value={numberSet.binary}
          onChange={({ target: { value } }) =>
            setNumberSet({ ...numberSet, binary: value })
          }
          style={{ textAlign: "right" }}
        />
      </Field>
      <Field>
        <Label htmlFor="decimal">10進数</Label>
        <Input
          id="decimal"
          value={numberSet.decimal}
          onChange={({ target: { value } }) =>
            setNumberSet({ ...numberSet, decimal: value })
          }
          style={{ textAlign: "right" }}
        />
      </Field>
      <Field>
        <Label htmlFor="hexadecimal">16進数</Label>
        <Input
          id="hexadecimal"
          value={numberSet.hexadecimal}
          onChange={({ target: { value } }) =>
            setNumberSet({ ...numberSet, hexadecimal: value })
          }
          style={{ textAlign: "right" }}
        />
      </Field>
      <section style={{ padding: "1rem" }}>
        <Button>変換</Button>
      </section>
    </>
  )
}

export default Page
