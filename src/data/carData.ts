export interface CarSpec {
  label: string;
  value: string;
}

export interface CarVariant {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  variant: string;
  year: number;
  price: string;
  specs: CarSpec[];
  colors: {
    name: string;
    hex: string;
  }[];
  description: string;
}

// LX 600 Variants
export const lx600Variants: Record<string, Record<string, CarVariant>> = {
  bb: {
    saudi: {
      id: "lx600-bb-saudi",
      name: "Lexus LX 600 BB",
      manufacturer: "Abdul Lateef Jameel",
      model: "LX 600",
      variant: "BB",
      year: 2026,
      price: "Contact For Detail's",
      description:
        "The Lexus LX 600 BB 2026 Saudi Edition combines legendary reliability with refined luxury, featuring premium appointments tailored for the discerning Gulf market.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "7 Passengers" },
        { label: "Fuel Type", value: "Premium Gasoline" },
        { label: "0-100 km/h", value: "6.9 seconds" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
    Braimi: {
      id: "lx600-bb-Braimi",
      name: "Lexus LX 600 BB",
      manufacturer: "Saud Bahwan",
      model: "LX 600",
      variant: "BB",
      year: 2026,
      price: "Contact For Detail's",
      description:
        "The Braimi-sourced LX 600 BB 2026 delivers exceptional quality with region-specific enhancements for optimal performance in Gulf conditions.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "7 Passengers" },
        { label: "Fuel Type", value: "Premium Gasoline" },
        { label: "0-100 km/h", value: "6.9 seconds" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
  },
  vip: {
    saudi: {
      id: "lx600-vip-saudi",
      name: "Lexus LX 600 VIP",
      manufacturer: "Abdul Lateef Jameel",
      model: "LX 600",
      variant: "VIP",
      year: 2025,
      price: "Contact For Detail's",
      description:
        "The ultimate expression of luxury, the LX 600 Braimi VIP 2025 Saudi Edition features executive rear seating with massage and climate control.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "4 Executive Seats" },
        { label: "Rear Entertainment", value: "Dual Screens" },
        { label: "Features", value: "Massage, Ottoman" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
    Braimi: {
      id: "lx600-vip-Braimi",
      name: "Lexus LX 600 Braimi VIP",
      manufacturer: "Saud Bahwan",
      model: "LX 600",
      variant: "Braimi VIP",
      year: 2025,
      price: "Contact For Detail's",
      description:
        "Braimi Edition Braimi VIP 2025 with unparalleled comfort and executive appointments for the distinguished traveler.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "4 Executive Seats" },
        { label: "Rear Entertainment", value: "Dual Screens" },
        { label: "Features", value: "Massage, Ottoman" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
  },
  "f-sport": {
    saudi: {
      id: "lx600-f-sport-saudi",
      name: "Lexus LX 600 F-Sport",
      manufacturer: "Abdul Lateef Jameel",
      model: "LX 600",
      variant: "F-Sport",
      year: 2026,
      price: "Contact For Detail's",
      description:
        "The F-Sport 2026 edition delivers dynamic performance with sport-tuned suspension and aggressive styling.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Sport AT" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Suspension", value: "Sport-Tuned AVS" },
        { label: "Brakes", value: "High-Performance" },
        { label: "0-100 km/h", value: "6.5 seconds" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
    Braimi: {
      id: "lx600-f-sport-oman",
      name: "Lexus LX 600 F-Sport",
      manufacturer: "Saud Bahwan",
      model: "LX 600",
      variant: "F-Sport",
      year: 2026,
      price: "Contact For Detail's",
      description: "Braimi Edition F-Sport 2026 with enhanced dynamics and sport-focused driving experience.",
      specs: [
        { label: "Engine", value: "3.5L V6 Twin-Turbo" },
        { label: "Power", value: "409 HP" },
        { label: "Torque", value: "650 Nm" },
        { label: "Transmission", value: "10-Speed Sport AT" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Suspension", value: "Sport-Tuned AVS" },
        { label: "Brakes", value: "High-Performance" },
        { label: "0-100 km/h", value: "6.5 seconds" },
      ],
      colors: [
        { name: "Sonic White", hex: "#FFFFFF" },
        { name: "Obsidian Black", hex: "#1a1a1a" },
        { name: "Titanium Gray", hex: "#6b6b6b" },
      ],
    },
  },
};

// GXR Variants
export const gxrVariants: Record<string, Record<string, CarVariant>> = {
  l4: {
    saudi: {
      id: "gxr-l4-saudi",
      name: "Toyota GXR L4",
      manufacturer: "Abdul Lateef Jameel",
      model: "GXR",
      variant: "L4",
      year: 2025,
      price: "Contact For Detail's",
      description:
        "The GXR L4 2025 Saudi Edition offers robust performance with the efficient 4-cylinder engine, perfect for both urban and off-road adventures.",
      specs: [
        { label: "Engine", value: "4.0L V6" },
        { label: "Power", value: "275 HP" },
        { label: "Torque", value: "385 Nm" },
        { label: "Transmission", value: "6-Speed Automatic" },
        { label: "Drivetrain", value: "Part-Time 4WD" },
        { label: "Seating", value: "8 Passengers" },
        { label: "Fuel Type", value: "Regular Gasoline" },
        { label: "Ground Clearance", value: "225 mm" },
      ],
      colors: [
        { name: "Super White", hex: "#FFFFFF" },
        { name: "Attitude Black", hex: "#1a1a1a" },
        { name: "Gray Metallic", hex: "#6b6b6b" },
      ],
    },
    Braimi: {
      id: "gxr-l4-oman",
      name: "Toyota GXR L4",
      manufacturer: "SAud Bahwan",
      model: "GXR",
      variant: "L4",
      year: 2025,
      price: "Contact For Detail's",
      description:
        "The Braimi Edition GXR L4 2025 delivers proven reliability with enhanced features for the demanding Gulf terrain.",
      specs: [
        { label: "Engine", value: "4.0L V6" },
        { label: "Power", value: "275 HP" },
        { label: "Torque", value: "385 Nm" },
        { label: "Transmission", value: "6-Speed Automatic" },
        { label: "Drivetrain", value: "Part-Time 4WD" },
        { label: "Seating", value: "8 Passengers" },
        { label: "Fuel Type", value: "Regular Gasoline" },
        { label: "Ground Clearance", value: "225 mm" },
      ],
      colors: [
        { name: "Super White", hex: "#FFFFFF" },
        { name: "Attitude Black", hex: "#1a1a1a" },
        { name: "Gray Metallic", hex: "#6b6b6b" },
      ],
    },
  },
  l5: {
    saudi: {
      id: "gxr-l5-saudi",
      name: "Toyota GXR L5",
      manufacturer: "Abdul Lateef Jameel",
      model: "GXR",
      variant: "L5",
      year: 2025,
      price: "Contact For Detail's",
      description:
        "The flagship GXR L5 2025 Saudi Edition features premium appointments and enhanced capabilities for ultimate versatility.",
      specs: [
        { label: "Engine", value: "4.6L V8" },
        { label: "Power", value: "304 HP" },
        { label: "Torque", value: "439 Nm" },
        { label: "Transmission", value: "6-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "8 Passengers" },
        { label: "Fuel Type", value: "Premium Gasoline" },
        { label: "Ground Clearance", value: "230 mm" },
      ],
      colors: [
        { name: "Super White", hex: "#FFFFFF" },
        { name: "Attitude Black", hex: "#1a1a1a" },
        { name: "Gray Metallic", hex: "#6b6b6b" },
      ],
    },
    kuwait: {
      id: "gxr-l5-kuwait",
      name: "Toyota GXR L5",
      manufacturer: "AL-Sayer",
      model: "GXR",
      variant: "L5",
      year: 2026,
      price: "Contact For Detail's",
      description: "Kuwait Edition GXR L5 2026 with exclusive features and premium V8 power for discerning buyers.",
      specs: [
        { label: "Engine", value: "4.6L V8" },
        { label: "Power", value: "304 HP" },
        { label: "Torque", value: "439 Nm" },
        { label: "Transmission", value: "6-Speed Automatic" },
        { label: "Drivetrain", value: "Full-Time 4WD" },
        { label: "Seating", value: "8 Passengers" },
        { label: "Fuel Type", value: "Premium Gasoline" },
        { label: "Ground Clearance", value: "230 mm" },
      ],
      colors: [
        { name: "Super White", hex: "#FFFFFF" },
        { name: "Attitude Black", hex: "#1a1a1a" },
        { name: "Gray Metallic", hex: "#6b6b6b" },
      ],
    },
  },
};
