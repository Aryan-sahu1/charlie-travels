export type BlogPost = {
  slug: string;
  title: string;
  category: "Travel Tips" | "Parcel & Cargo" | "Booking Guides";
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  takeaway: string;
  sections: { id: string; title: string; paragraphs: string[]; checklist?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sleeper-or-seater-choose-your-bus",
    title: "Sleeper or seater? Find your kind of journey.",
    category: "Travel Tips",
    excerpt:
      "A little planning goes a long way. Here is how to choose the right coach, pack your essentials and settle in for the road ahead.",
    image: "gallery-6.webp",
    imageAlt: "Individual sleeper berths inside a Charlie Travels coach",
    date: "2026-11-23",
    takeaway:
      "Choose around your comfort, travel time and companions. Confirm the exact coach and berth or seat with our team before you book.",
    sections: [
      {
        id: "your-travel-style",
        title: "Start with how you like to travel",
        paragraphs: [
          "Some journeys are for catching up on sleep. Others are for watching the road, sharing a conversation and arriving ready for the day. Think about what will make you most comfortable before choosing a coach.",
          "A sleeper gives you space to lie down, while a seater keeps you upright in a reclining seat. The right choice depends on the journey length, your preferred posture and the coach available on your route. Ask for the actual layout rather than assuming every bus is the same.",
        ],
      },
      {
        id: "overnight-comfort",
        title: "Make overnight comfort a priority",
        paragraphs: [
          "For a night journey, ask about berth placement, boarding time and the expected arrival window. If you prefer a lower berth or are traveling with someone who needs easier access, mention that while enquiring. Availability needs to be confirmed before payment.",
          "Keep a light layer and the essentials you use at night in a small bag. Your main luggage may be stored away from your seat, so separate the things you need before boarding.",
        ],
        checklist: [
          "A light layer for an air-conditioned coach",
          "Water and your usual travel essentials",
          "A charged phone and charging cable",
          "Your booking confirmation and boarding contact",
        ],
      },
      {
        id: "traveling-together",
        title: "Booking for family or friends? Ask early",
        paragraphs: [
          "Share the number of passengers and any seating preferences in your first message. Adjacent seats or berths can be easier to discuss when the team has the whole group's details together.",
          "For children, older passengers or anyone with access needs, ask about the boarding point and coach access in advance. Confirm what the team can accommodate instead of relying on a generic coach photo.",
        ],
      },
      {
        id: "before-confirming",
        title: "Check the details before you confirm",
        paragraphs: [
          "Send your destination, date, passenger count and preferred coach type on WhatsApp. Ask the team to confirm the departure, fare, boarding point and seat or berth allocation together.",
          "Keep the final confirmation handy and check for any timing updates before leaving for the counter. A clear plan makes the first part of your journey feel easier, long before the bus starts moving.",
        ],
      },
    ],
  },
  {
    slug: "how-to-pack-a-parcel-for-bus-delivery",
    title: "A safer parcel starts with better packing.",
    category: "Parcel & Cargo",
    excerpt:
      "From the right box to a clear destination label, give your parcel a little extra care before it leaves the counter.",
    image: "parcel.webp",
    imageAlt: "A packed parcel being handled beside a bus",
    date: "2026-11-23",
    takeaway:
      "Confirm that your item is accepted before packing it. Share the contents, approximate weight, dimensions and destination with our team.",
    sections: [
      {
        id: "check-contents",
        title: "Check the contents before the carton",
        paragraphs: [
          "Start by telling the team what you need to send. Documents, personal items and small business parcels can have different packing needs, and acceptance depends on the contents, size and available route.",
          "Do not bring restricted or hazardous items to the counter. If an item is fragile, valuable, liquid or unusual, explain it clearly and ask whether the service is suitable before making a booking.",
        ],
      },
      {
        id: "pack-well",
        title: "Choose a box that can do its job",
        paragraphs: [
          "Use a sturdy carton that suits the item rather than a much larger box with loose space inside. Wrap items separately where needed and fill empty gaps so the contents do not move around during handling.",
          "Close the box securely with packing tape across the openings. Reused cartons should be in good condition, with old labels removed or covered so the destination is unambiguous.",
        ],
        checklist: [
          "A sturdy box with no torn corners",
          "Cushioning around items and in empty spaces",
          "Securely taped seams",
          "No loose strings or exposed contents",
        ],
      },
      {
        id: "label-clearly",
        title: "Make the label easy to read",
        paragraphs: [
          "Write the receiver's name, mobile number and destination clearly on the parcel. Add the sender's contact information too. Check every digit of the phone number with the receiver before handing the parcel over.",
          "Keep your booking reference and share it with the receiver. Ask the team where the parcel will be collected, what contact the receiver should use and which confirmation they need to show.",
        ],
      },
      {
        id: "handover",
        title: "Leave the counter with the details",
        paragraphs: [
          "Before handover, confirm the final charge, dispatch plan and expected collection arrangement. Delivery windows depend on the route and operating conditions; ask for the current estimate for your particular parcel.",
          "Retain the acknowledgement and contact our team through the same booking conversation for updates. Clear details at handover help both the sender and receiver stay informed.",
        ],
      },
    ],
  },
  {
    slug: "book-a-bus-on-whatsapp",
    title: "Your next bus booking, one conversation away.",
    category: "Booking Guides",
    excerpt:
      "Know what to send, what to confirm and what to keep handy when you book your journey on WhatsApp.",
    image: "gallery-1.webp",
    imageAlt: "Charlie Travels coaches ready for departure",
    date: "2026-11-23",
    takeaway:
      "A WhatsApp enquiry starts the conversation. Your booking is confirmed only after the team verifies availability and shares the final details.",
    sections: [
      {
        id: "first-message",
        title: "Send the essentials in your first message",
        paragraphs: [
          "Tell us where you are traveling from, your destination, the travel date and the number of passengers. Mention whether you prefer a sleeper or seater, and whether you have any timing or boarding preferences.",
          "If your dates are flexible, include that too. A complete first message helps the team check the relevant options without several rounds of questions.",
        ],
      },
      {
        id: "confirm-options",
        title: "Get the full picture before choosing",
        paragraphs: [
          "Ask for the available coach type, departure time, boarding point and fare for your chosen date. If traveling as a group, confirm the seat or berth arrangement before agreeing to the option.",
          "Photos show the travel experience, but your final confirmation should identify the option actually available for your journey. Ask about luggage arrangements and any specific needs at this stage.",
        ],
        checklist: [
          "Travel date and destination",
          "Departure and boarding location",
          "Seat or berth and passenger count",
          "Final fare and cancellation or change terms",
        ],
      },
      {
        id: "save-confirmation",
        title: "Keep the confirmation close",
        paragraphs: [
          "Follow only the payment instructions confirmed by the team in your booking conversation. Keep your acknowledgement, boarding contact and the final journey details together so you can find them quickly.",
          "Do not assume an enquiry has reserved a seat. Wait for the team to explicitly confirm your booking, and ask about anything in the confirmation that does not match your request.",
        ],
      },
      {
        id: "departure-day",
        title: "Do a quick check on departure day",
        paragraphs: [
          "Review the boarding point and any timing updates before setting off. Allow enough time to reach the location and find the right counter without rushing.",
          "If your plans change or you expect to be late, contact the team promptly. Changes depend on the booking terms and available options, so ask for confirmation of any revised arrangement.",
        ],
      },
    ],
  },
  {
    slug: "overnight-bus-packing-checklist",
    title: "Pack light. Travel a little more comfortably.",
    category: "Travel Tips",
    excerpt:
      "A practical overnight bus checklist that keeps the useful things within reach and the extra weight at home.",
    image: "seating.webp",
    imageAlt: "Reclining seats inside a Charlie Travels coach",
    date: "2026-11-23",
    takeaway:
      "Keep a small essentials bag with you and check the luggage allowance for your actual booking before departure.",
    sections: [
      {
        id: "small-bag",
        title: "Your small bag makes the difference",
        paragraphs: [
          "Separate what you need during the journey from what you will only need at your destination. A compact bag is easier to manage in a coach than opening your main luggage every time you need something.",
          "Keep your phone, wallet, booking details and other valuables with you. Before boarding, check that the bag closes securely and can fit in the space available without blocking an aisle.",
        ],
      },
      {
        id: "essentials",
        title: "Bring the things you will actually use",
        paragraphs: [
          "Think through your journey from boarding to arrival. Choose a few comfort items that fit your routine, and avoid packing duplicates just in case. Keep your own essential medicines accessible according to your usual instructions.",
        ],
        checklist: [
          "Booking confirmation and suitable identification",
          "Water and a light snack if needed",
          "A light layer for the AC coach",
          "Phone, cable and a charged power bank",
          "Personal essentials and a small waste bag",
        ],
      },
      {
        id: "luggage",
        title: "Check your main luggage before leaving",
        paragraphs: [
          "Ask the team about luggage allowance and handling for your booked service. If you have an oversized bag or an extra item, mention it before arrival rather than expecting space at the last minute.",
          "Label your bag with your contact information and make it easy to recognise. Keep loose straps secured, and do not put valuables or anything you need during the trip into luggage stored out of reach.",
        ],
      },
      {
        id: "arrival",
        title: "Keep a little room for arrival",
        paragraphs: [
          "Save your onward travel details before you leave and keep enough phone charge for arrival. Confirm the drop-off point with the team so the person meeting you has the right information.",
          "Before stepping off the bus, check the seat or berth area, overhead space and your pockets. Collect your luggage carefully and give yourself a moment to make sure everything is with you.",
        ],
      },
    ],
  },
  {
    slug: "parcel-handover-checklist",
    title: "Sending a parcel? Check these details first.",
    category: "Parcel & Cargo",
    excerpt:
      "Make handover simpler with a clear destination, the right receiver details and a few questions for the counter team.",
    image: "experience.webp",
    imageAlt: "Charlie Travels team loading a parcel beside a coach",
    date: "2026-11-23",
    takeaway:
      "Share accurate parcel details and confirm the receiving arrangement before dispatch. Keep the handover acknowledgement until collection is complete.",
    sections: [
      {
        id: "before-counter",
        title: "Get the parcel details together",
        paragraphs: [
          "Before you visit the counter, send the contents, approximate dimensions, weight and destination to our team. This helps them check whether the parcel fits the service and which route may be suitable.",
          "Ask about the current counter location and handover timing. Route availability and dispatch plans can vary, so rely on the team’s confirmation for your parcel rather than a previous booking.",
        ],
      },
      {
        id: "receiver-details",
        title: "Check the receiver information twice",
        paragraphs: [
          "Use the receiver's current name and phone number, and make sure the destination is specific. If there are several places with similar names, clarify the intended city and collection arrangement in writing.",
          "Tell the receiver when you are planning to send the parcel. They should know how to contact the team and be available to follow the agreed collection process.",
        ],
        checklist: [
          "Sender name and reachable mobile number",
          "Receiver name and checked mobile number",
          "Destination and agreed collection point",
          "Contents, dimensions and approximate weight",
        ],
      },
      {
        id: "price-and-timing",
        title: "Ask about charges and the dispatch plan",
        paragraphs: [
          "Request the final price after the team has checked the parcel. Confirm whether there are any handling conditions you need to know about, especially for items needing extra care.",
          "Ask for the expected dispatch and collection window for the available route. Treat an estimate as an estimate, and ask how the team will communicate changes or arrival updates.",
        ],
      },
      {
        id: "after-handover",
        title: "Keep one conversation for updates",
        paragraphs: [
          "Save the acknowledgement or reference shared at handover. Keep booking details and follow-up questions in the same conversation so the team can identify the parcel quickly.",
          "When the receiver collects it, ask them to confirm that handover is complete. If anything needs attention, contact the team promptly with the reference and a clear explanation.",
        ],
      },
    ],
  },
  {
    slug: "find-your-delhi-boarding-point",
    title: "A calm departure starts before you board.",
    category: "Booking Guides",
    excerpt:
      "Know your boarding point, save the contact and leave yourself time. A simple guide to a smoother start in Delhi.",
    image: "family.webp",
    imageAlt: "Passengers sharing a journey inside a coach",
    date: "2026-11-23",
    takeaway:
      "Always use the boarding point confirmed for your booking. A business address or map search may not be the departure point for every service.",
    sections: [
      {
        id: "exact-location",
        title: "Get the exact location, not just the area",
        paragraphs: [
          "Mori Gate and the surrounding Delhi boarding areas can be busy. Ask the team for the precise boarding location and a useful landmark for your booked service.",
          "A counter address tells you where the business is located, but the bus may board at a separately confirmed point. Check which location you need before arranging your ride.",
        ],
      },
      {
        id: "save-details",
        title: "Save the information before setting off",
        paragraphs: [
          "Keep the location link, departure time, booking confirmation and boarding contact easy to access. Share the same confirmed location with anyone dropping you off or traveling with you.",
          "If you are unfamiliar with the area, ask how to identify the correct counter or coach on arrival. It is easier to clarify these details while you still have time to adjust your plan.",
        ],
        checklist: [
          "Exact boarding point and landmark",
          "Confirmed departure and reporting instructions",
          "Boarding contact saved on your phone",
          "Booking details and passenger information",
        ],
      },
      {
        id: "allow-time",
        title: "Build a little breathing room into the plan",
        paragraphs: [
          "Allow for traffic, finding the location and handling your luggage. Ask the team how early they want you to report for your particular service rather than using a universal arrival rule.",
          "If you are connecting from another journey, leave room for delays. Let the team know about timing constraints when booking so they can explain the available options.",
        ],
      },
      {
        id: "stay-connected",
        title: "Stay connected until you are on board",
        paragraphs: [
          "Check your booking conversation for updates before leaving. If the boarding instructions change, confirm the new arrangement directly with the team and update your travel companions.",
          "If you cannot find the point or expect to arrive late, call the boarding contact promptly. Keep your phone available and follow the confirmed instructions for your service.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function readingMinutes(post: BlogPost) {
  const words = [
    post.excerpt,
    post.takeaway,
    ...post.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.checklist || []),
    ]),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(`${date}T00:00:00+05:30`));
}
