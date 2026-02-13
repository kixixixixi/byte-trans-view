"use client"

import { Button, Field, Input, Label } from "components/form"
import { FC, useState } from "react"

const Page: FC = () => {
  const [numberSet, setNumberSet] = useState<{
    binary: string
    decimal: string
    hexadecimal: string
  }>({ binary: "", decimal: "", hexadecimal: "" })
  const parsers: Record<
    string,
    { pattern: RegExp; parse: (v: string) => bigint; key: string }
  > = {
    binary: {
      pattern: /^[01]+$/,
      parse: (v) => BigInt("0b" + v),
      key: "binary",
    },
    decimal: { pattern: /^[0-9]+$/, parse: (v) => BigInt(v), key: "decimal" },
    hexadecimal: {
      pattern: /^[0-9a-fA-F]+$/,
      parse: (v) => BigInt("0x" + v),
      key: "hexadecimal",
    },
  }

  const transform = (from: keyof typeof parsers) => {
    const { pattern, parse, key } = parsers[from]
    const value = numberSet[key as keyof typeof numberSet].replace(/\s/g, "")
    if (!pattern.test(value)) {
      alert("不正な値です")
      return
    }
    const num = parse(value)
    setNumberSet({
      binary: from === "binary" ? numberSet.binary : num.toString(2),
      decimal: from === "decimal" ? numberSet.decimal : num.toString(10),
      hexadecimal:
        from === "hexadecimal"
          ? numberSet.hexadecimal
          : num.toString(16).toUpperCase(),
    })
  }
  return (
    <>
      <Field>
        <Label htmlFor="binary">2進数</Label>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Input
            id="binary"
            value={numberSet.binary}
            onChange={({ target: { value } }) =>
              setNumberSet({ ...numberSet, binary: value })
            }
            style={{ textAlign: "right" }}
          />
          <Button onClick={() => transform("binary")}>変換</Button>
        </div>
      </Field>
      <Field>
        <Label htmlFor="decimal">10進数</Label>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Input
            id="decimal"
            value={numberSet.decimal}
            onChange={({ target: { value } }) =>
              setNumberSet({ ...numberSet, decimal: value })
            }
            style={{ textAlign: "right" }}
          />
          <Button onClick={() => transform("decimal")}>変換</Button>
        </div>
      </Field>
      <Field>
        <Label htmlFor="hexadecimal">16進数</Label>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Input
            id="hexadecimal"
            value={numberSet.hexadecimal}
            onChange={({ target: { value } }) =>
              setNumberSet({ ...numberSet, hexadecimal: value })
            }
            style={{ textAlign: "right" }}
          />
          <Button onClick={() => transform("hexadecimal")}>変換</Button>
        </div>
      </Field>
    </>
  )
}

export default Page
