import { Label, RadioGroup, clx } from "@medusajs/ui"
import { ChangeEvent, Fragment, useState } from "react"
import { IoChevronDown } from "react-icons/io5"
import { Menu, Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(
    "Latest Arrivals"
  )

  return (
    <div className="w-auto">
      <Menu as="div" className="relative inline-block text-left py-2">
        <div>
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white hover:text-gray-300 items-center">
            {title} |{" "}
            <span className="text-ui-fg-muted ml-1"> {selectedLabel}</span>
            <IoChevronDown
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-white group-hover:text-gray-300"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-0"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-0"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-52 origin-top rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none p-4">
            <RadioGroup>
              {items?.map((i) => (
                <div
                  key={i.value}
                  className={clx(
                    "flex gap-x-2 items-center transition-all ease-out",
                    {
                      "": i.value === value,
                    }
                  )}
                >
                  {i.value === value ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <IoIosRadioButtonOn />
                    </motion.div>
                  ) : (
                    <IoIosRadioButtonOff />
                  )}
                  <RadioGroup.Item
                    checked={i.value === value}
                    onClick={(e) => {
                      handleChange(
                        e as unknown as ChangeEvent<HTMLButtonElement>,
                        i.value
                      )
                      setSelectedLabel(i.label) // Set the selected label
                    }}
                    className="hidden peer"
                    id={i.value}
                    value={i.value}
                  />
                  <Label
                    placeholder={i.label}
                    htmlFor={i.value}
                    className={clx(
                      "!txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer",
                      {
                        "text-ui-fg-base": i.value === value,
                      }
                    )}
                  >
                    {i.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default FilterRadioGroup
