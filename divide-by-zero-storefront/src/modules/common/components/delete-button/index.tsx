import { Spinner } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa"

import { deleteLineItem } from "@modules/cart/actions"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="flex gap-x-1 text-ui-fg-subtle hover:text-red-800 cursor-pointer text-red-500  text-lg"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? <Spinner className="animate-spin" /> : <FaRegTrashAlt />}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
