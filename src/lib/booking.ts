export const bookingNumber = "919599412941";
export function bookingUrl(message = "Hi, I would like to book a bus seat or send a parcel.") {
  return `https://wa.me/${bookingNumber}?text=${encodeURIComponent(message)}`;
}
