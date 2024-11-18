import toast from "react-hot-toast"
import { updateBooking } from "../../services/apiBookings"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export default function useCheckin() {
  const QueryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`)
      QueryClient.invalidateQueries({
        active: true,
      })
      navigate("/")
    },

    onError: () => toast.error("There was an error while checking in"),
  })

  return { checkin, isCheckingIn }
}
