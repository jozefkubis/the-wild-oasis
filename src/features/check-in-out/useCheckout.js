import toast from "react-hot-toast"
import { updateBooking } from "../../services/apiBookings"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useCheckout() {
  const QueryClient = useQueryClient()

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out!`)
      QueryClient.invalidateQueries({
        active: true,
      })
    },

    onError: () => toast.error("There was an error while checking out"),
  })

  return { checkout, isCheckingOut }
}
