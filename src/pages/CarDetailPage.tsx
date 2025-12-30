import { useState, lazy, Suspense, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Check, Box, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lx600Variants, gxrVariants, CarVariant } from "@/data/carData";
import { useTranslation } from "react-i18next";

const Car3DViewer = lazy(() => import("@/components/Car3DViewer"));

// Import car images
import lx600White from "@/assets/lx600-white.jpg";
import lx600Black from "@/assets/lx600-black.jpg";
import lx600Gray from "@/assets/lx600-gray.jpg";
import lx600Interior from "@/assets/lx600-interior.jpg";
import gxrWhite from "@/assets/gxr-white.jpg";
import gxrBlack from "@/assets/gxr-black.jpg";
import gxrGray from "@/assets/gxr-gray.jpg";
import gxrInterior from "@/assets/gxr-interior.jpg";

// BB variant images - White
import lx600BbWhiteFront from "@/assets/lx600-bb-white-front.png";
import lx600BbWhiteAngle from "@/assets/lx600-bb-white-angle.png";
import lx600BbWhiteSide from "@/assets/lx600-bb-white-side.png";
import lx600BbWhiteSide2 from "@/assets/lx600-bb-white-side2.png";
import lx600BbWhiteRear from "@/assets/lx600-bb-white-rear.png";

// BB variant images - Black
import lx600BbBlackFront from "@/assets/lx600-bb-black-front.png";
import lx600BbBlackAngle from "@/assets/lx600-bb-black-angle.png";
import lx600BbBlackSide from "@/assets/lx600-bb-black-side.png";
import lx600BbBlackRear from "@/assets/lx600-bb-black-rear.png";

// BB variant images - Gray
import lx600BbGrayFront from "@/assets/lx600-bb-gray-front.png";
import lx600BbGrayAngle from "@/assets/lx600-bb-gray-angle.png";
import lx600BbGraySide from "@/assets/lx600-bb-gray-side.png";
import lx600BbGrayRear from "@/assets/lx600-bb-gray-rear.png";

// Lexus LX 600 BB Braimi images
import lx600BbBraimiFront from "@/assets/lx600-bb-braimi-front.jpg";
import lx600BbBraimiSide from "@/assets/lx600-bb-braimi-side.jpg";
import lx600BbBraimiDetail from "@/assets/lx600-bb-braimi-detail.jpg";
import lx600BbBraimiRear from "@/assets/lx600-bb-braimi-rear.jpg";

// Lexus LX 600 VIP Braimi Extra images
import lx600VipBraimiExt1 from "@/assets/lexus-lx600-vip-braimi-ext-1.jpg";
import lx600VipBraimiExt2 from "@/assets/lexus-lx600-vip-braimi-ext-2.jpg";
import lx600VipBraimiExt3 from "@/assets/lexus-lx600-vip-braimi-ext-3.jpg";
import lx600VipBraimiExt4 from "@/assets/lexus-lx600-vip-braimi-ext-4.jpg";

// Lexus LX 600 VIP Braimi Interior images
import lx600VipBraimiInteriorV2_1 from "@/assets/lexus-lx600-vip-braimi-interior-v2-1.jpg";
import lx600VipBraimiInteriorV2_2 from "@/assets/lexus-lx600-vip-braimi-interior-v2-2.jpg";
import lx600VipBraimiInteriorV2_3 from "@/assets/lexus-lx600-vip-braimi-interior-v2-3.jpg";
import lx600VipBraimiInteriorV2_4 from "@/assets/lexus-lx600-vip-braimi-interior-v2-4.jpg";

// Lexus LX 600 F Sport Braimi Exterior images
import lx600FSportBraimiExt1 from "@/assets/lexus-lx600-f-sport-braimi-ext-1.jpg";
import lx600FSportBraimiExt2 from "@/assets/lexus-lx600-f-sport-braimi-ext-2.jpg";
import lx600FSportBraimiExt3 from "@/assets/lexus-lx600-f-sport-braimi-ext-3.jpg";
import lx600FSportBraimiExt4 from "@/assets/lexus-lx600-f-sport-braimi-ext-4.jpg";

// Lexus LX 600 F Sport Braimi Interior images
import lx600FSportBraimiInterior1 from "@/assets/lexus-lx600-f-sport-braimi-interior-1.jpg";
import lx600FSportBraimiInterior2 from "@/assets/lexus-lx600-f-sport-braimi-interior-2.jpg";

// Lexus LX 600 BB Braimi Exterior images
import lx600BbBraimiExt1 from "@/assets/lexus-lx600-bb-braimi-ext-1.jpg";
import lx600BbBraimiExt2 from "@/assets/lexus-lx600-bb-braimi-ext-2.jpg";
import lx600BbBraimiExt3 from "@/assets/lexus-lx600-bb-braimi-ext-3.jpg";
import lx600BbBraimiExt4 from "@/assets/lexus-lx600-bb-braimi-ext-4.jpg";

// Lexus LX 600 BB Braimi Interior images
import lx600BbBraimiInteriorV2_1 from "@/assets/lexus-lx600-bb-braimi-interior-v2-1.jpg";
import lx600BbBraimiInteriorV2_2 from "@/assets/lexus-lx600-bb-braimi-interior-v2-2.jpg";
import lx600BbBraimiInteriorV2_3 from "@/assets/lexus-lx600-bb-braimi-interior-v2-3.jpg";

// GXR L5 Kuwait images
import gxrL5KuwaitExt1 from "@/assets/gxr-l5-kuwait-ext-1.jpg";
import gxrL5KuwaitExt2 from "@/assets/gxr-l5-kuwait-ext-2.jpg";
import gxrL5KuwaitExt3 from "@/assets/gxr-l5-kuwait-ext-3.jpg";
import gxrL5KuwaitExt4 from "@/assets/gxr-l5-kuwait-ext-4.jpg";

// GXR L5 Kuwait Interior images
import gxrL5KuwaitInteriorV2_1 from "@/assets/gxr-l5-kuwait-interior-v2-1.jpg";
import gxrL5KuwaitInteriorV2_2 from "@/assets/gxr-l5-kuwait-interior-v2-2.jpg";
import gxrL5KuwaitInteriorV2_3 from "@/assets/gxr-l5-kuwait-interior-v2-3.jpg";

// GXR L4 Saudi images
import gxrL4SaudiExt1 from "@/assets/gxr-l4-saudi-ext-1.jpg";
import gxrL4SaudiExt2 from "@/assets/gxr-l4-saudi-ext-2.jpg";
import gxrL4SaudiExt3 from "@/assets/gxr-l4-saudi-ext-3.jpg";

// GXR L4 Saudi Interior images
import gxrL4SaudiInteriorV2_1 from "@/assets/gxr-l4-saudi-interior-v2-1.jpg";
import gxrL4SaudiInteriorV2_2 from "@/assets/gxr-l4-saudi-interior-v2-2.jpg";

// GXR L4 Braimi images
import gxrL4BraimiFront from "@/assets/gxr-l4-braimi-ext-1.jpg";
import gxrL4BraimiSide from "@/assets/gxr-l4-braimi-ext-2.jpg";
import gxrL4BraimiRear from "@/assets/gxr-l4-braimi-ext-3.jpg";
import gxrL4BraimiDetail from "@/assets/gxr-l4-braimi-ext-4.jpg";
import gxrL4BraimiExt5 from "@/assets/gxr-l4-braimi-ext-5.jpg";

// GXR L4 Braimi Interior images
import gxrL4BraimiInteriorV2_1 from "@/assets/gxr-l4-braimi-interior-v2-1.jpg";
import gxrL4BraimiInteriorV2_2 from "@/assets/gxr-l4-braimi-interior-v2-2.jpg";

// Gallery images by variant/color
const bbGalleries: Record<string, string[]> = {
  white: [lx600BbWhiteFront, lx600BbWhiteAngle, lx600BbWhiteSide, lx600BbWhiteSide2, lx600BbWhiteRear],
  black: [lx600BbBlackFront, lx600BbBlackAngle, lx600BbBlackSide, lx600BbBlackRear],
  gray: [lx600BbGrayFront, lx600BbGrayAngle, lx600BbGraySide, lx600BbGrayRear],
};

const lx600BbBraimiGallery = [lx600BbBraimiExt1, lx600BbBraimiExt2, lx600BbBraimiExt3, lx600BbBraimiExt4];
const lx600VipBraimiGallery = [lx600VipBraimiExt1, lx600VipBraimiExt2, lx600VipBraimiExt3, lx600VipBraimiExt4];
const lx600FSportBraimiGallery = [lx600FSportBraimiExt1, lx600FSportBraimiExt2, lx600FSportBraimiExt3, lx600FSportBraimiExt4];

const gxrL5KuwaitGallery = [gxrL5KuwaitExt1, gxrL5KuwaitExt2, gxrL5KuwaitExt3, gxrL5KuwaitExt4];
const gxrL5KuwaitInteriorGallery = [gxrL5KuwaitInteriorV2_1, gxrL5KuwaitInteriorV2_2, gxrL5KuwaitInteriorV2_3];
const gxrL4SaudiGallery = [gxrL4SaudiExt1, gxrL4SaudiExt2, gxrL4SaudiExt3];
const gxrL4SaudiInteriorGallery = [gxrL4SaudiInteriorV2_1, gxrL4SaudiInteriorV2_2];
const gxrL4BraimiGallery = [gxrL4BraimiFront, gxrL4BraimiSide, gxrL4BraimiRear, gxrL4BraimiDetail, gxrL4BraimiExt5];
const gxrL4BraimiInteriorGallery = [gxrL4BraimiInteriorV2_1, gxrL4BraimiInteriorV2_2];
const lx600BbBraimiInteriorGallery = [lx600BbBraimiInteriorV2_1, lx600BbBraimiInteriorV2_2, lx600BbBraimiInteriorV2_3];
const lx600VipBraimiInteriorGallery = [lx600VipBraimiInteriorV2_1, lx600VipBraimiInteriorV2_2, lx600VipBraimiInteriorV2_3, lx600VipBraimiInteriorV2_4];
const lx600FSportBraimiInteriorGallery = [lx600FSportBraimiInterior1, lx600FSportBraimiInterior2];

const colorImages: Record<string, Record<string, string>> = {
  lx600: {
    white: lx600BbWhiteFront,
    black: lx600BbBlackFront,
    gray: lx600BbGrayFront,
  },
  gxr: {
    white: gxrWhite,
    black: gxrBlack,
    gray: gxrGray,
  },
};

interface CarDetailPageProps {
  carType: "lx600" | "gxr";
}

// Helper function to get translated spec label
const getTranslatedSpecLabel = (label: string, t: (key: string) => string): string => {
  const labelMap: Record<string, string> = {
    "Engine": "carDetail.specs.engine",
    "Power": "carDetail.specs.power",
    "Torque": "carDetail.specs.torque",
    "Transmission": "carDetail.specs.transmission",
    "Drivetrain": "carDetail.specs.drivetrain",
    "Seating": "carDetail.specs.seating",
    "Fuel Type": "carDetail.specs.fuelType",
    "0-100 km/h": "carDetail.specs.acceleration",
    "Rear Entertainment": "carDetail.specs.rearEntertainment",
    "Features": "carDetail.specs.features",
    "Suspension": "carDetail.specs.suspension",
    "Brakes": "carDetail.specs.brakes",
    "Ground Clearance": "carDetail.specs.groundClearance",
  };
  return t(labelMap[label] || label);
};

// Helper function to get translated color name
const getTranslatedColorName = (colorName: string, t: (key: string) => string): string => {
  const colorMap: Record<string, string> = {
    "Sonic White": "carDetail.colors.sonicWhite",
    "Obsidian Black": "carDetail.colors.obsidianBlack",
    "Titanium Gray": "carDetail.colors.titaniumGray",
    "Super White": "carDetail.colors.superWhite",
    "Attitude Black": "carDetail.colors.attitudeBlack",
    "Gray Metallic": "carDetail.colors.grayMetallic",
  };
  return t(colorMap[colorName] || colorName);
};

const CarDetailPage = ({ carType }: CarDetailPageProps) => {
  const { variant, manufacturer } = useParams<{ variant: string; manufacturer: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState<"exterior" | "interior" | "3d">("exterior");
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setGalleryIndex(0);
  }, [variant, manufacturer, carType, activeTab, selectedColor]);

  // 3D model is only available for LX 600
  const has3DModel = carType === "lx600";

  // Check if this is BB variant for Sketchfab 3D model
  const isBbVariant = carType === "lx600" && variant === "bb";
  const sketchfabModelId = isBbVariant ? "ca1ad167631f4ea398a8934c1f66229e" : undefined;

  // Check if this is BB Saudi white variant for gallery
  const isBbSaudiWhite = carType === "lx600" && variant === "bb" && manufacturer === "saudi";
  // Check if this is Lexus BB Braimi variant for gallery
  const isLx600BbBraimi = carType === "lx600" && variant === "bb" && manufacturer === "Braimi";
  // Check if this is Lexus VIP Braimi variant for gallery
  const isLx600VipBraimi = carType === "lx600" && variant === "vip" && manufacturer === "Braimi";
  // Check if this is Lexus F Sport Braimi variant for gallery
  const isLx600FSportBraimi = carType === "lx600" && variant === "f-sport" && manufacturer === "Braimi";
  // Check if this is Lexus F Sport Saudi variant for gallery
  const isLx600FSportSaudi = carType === "lx600" && variant === "f-sport" && manufacturer === "saudi";
  // Check if this is GXR L5 Kuwait variant for gallery
  const isGxrL5Kuwait = carType === "gxr" && variant === "l5" && manufacturer === "kuwait";
  // Check if this is GXR L4 Saudi variant for gallery
  const isGxrL4Saudi = carType === "gxr" && variant === "l4" && manufacturer === "saudi";
  // Check if this is GXR L4 Braimi variant for gallery
  const isGxrL4Braimi = carType === "gxr" && variant === "l4" && manufacturer === "Braimi";

  const variants = carType === "lx600" ? lx600Variants : gxrVariants;
  const carData: CarVariant | undefined = variant && manufacturer ? variants[variant]?.[manufacturer] : undefined;

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">{t('carDetail.vehicleNotFound')}</h1>
          <Button variant="gold" onClick={() => navigate("/")}>
            {t('carDetail.returnHome')}
          </Button>
        </div>
      </div>
    );
  }

  const colorKey = carData.colors[selectedColor]?.name.toLowerCase().includes("white")
    ? "white"
    : carData.colors[selectedColor]?.name.toLowerCase().includes("black")
      ? "black"
      : "gray";

  const interiorImage = carType === "lx600" ? lx600Interior : gxrInterior;

  // Determine current image - use gallery for BB Saudi or GXR L5 Kuwait, otherwise use color images
  const isBbVariantPage = carType === "lx600" && variant === "bb";

  let currentGallery: string[] = [];
  if (activeTab === "exterior") {
    if (isLx600VipBraimi) {
      currentGallery = lx600VipBraimiGallery; // Reuse base images + VIP specific
    } else if (isLx600FSportBraimi || isLx600FSportSaudi) {
      currentGallery = lx600FSportBraimiGallery;
    } else if (isLx600BbBraimi) {
      currentGallery = lx600BbBraimiGallery;
    } else if (isBbVariantPage) {
      currentGallery = bbGalleries[colorKey] || [];
    } else if (isGxrL5Kuwait) {
      currentGallery = gxrL5KuwaitGallery;
    } else if (isGxrL4Saudi) {
      currentGallery = gxrL4SaudiGallery;
    } else if (isGxrL4Braimi) {
      currentGallery = gxrL4BraimiGallery;
    }
  } else if (activeTab === "interior") {
    if (isGxrL5Kuwait) {
      currentGallery = gxrL5KuwaitInteriorGallery;
    } else if (isGxrL4Saudi) {
      currentGallery = gxrL4SaudiInteriorGallery;
    } else if (isGxrL4Braimi) {
      currentGallery = gxrL4BraimiInteriorGallery;
    } else if (isLx600BbBraimi) {
      currentGallery = lx600BbBraimiInteriorGallery;
    } else if (isLx600VipBraimi) {
      currentGallery = lx600VipBraimiInteriorGallery;
    } else if (isLx600FSportBraimi || isLx600FSportSaudi) {
      currentGallery = lx600FSportBraimiInteriorGallery;
    }
  }

  const hasGallery = currentGallery.length > 0;

  const currentImage =
    activeTab === "interior" && !hasGallery
      ? interiorImage
      : hasGallery
        ? currentGallery[galleryIndex]
        : colorImages[carType][colorKey];

  const nextImage = () => {
    if (hasGallery) {
      setGalleryIndex((prev) => (prev + 1) % currentGallery.length);
    }
  };

  const prevImage = () => {
    if (hasGallery) {
      setGalleryIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    }
  };

  // Get available manufacturers for this variant
  const availableManufacturers = Object.keys(variants[variant!] || {});

  // Get translated manufacturer name
  const getManufacturerName = (mfr: string): string => {
    const key = `carDetail.manufacturers.${mfr.toLowerCase()}`;
    const translated = t(key);
    return translated !== key ? translated : mfr.charAt(0).toUpperCase() + mfr.slice(1);
  };

  // Get translated car name and description
  const getCarName = (): string => {
    const variantLower = variant?.toLowerCase() || '';
    const key = `carDetail.cars.${carType}-${variantLower}.name`;
    const translated = t(key);
    return translated !== key ? translated : carData.name;
  };

  const getCarDescription = (): string => {
    const variantLower = variant?.toLowerCase() || '';
    const mfrLower = manufacturer?.toLowerCase() || '';
    const key = `carDetail.cars.${carType}-${variantLower}.description.${mfrLower}`;
    const translated = t(key);
    return translated !== key ? translated : carData.description;
  };

  return (
    <div className="min-h-screen bg-background safe-area-inset">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark"
      >
        <div className="section-padding flex items-center justify-between h-16">
          <Link
            to="/#vehicles"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
          {/* Exterior/Interior/3D Toggle */}
          <div className="flex bg-secondary rounded-full p-1">
            <button
              onClick={() => setActiveTab("exterior")}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "exterior" ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t('carDetail.exterior')}
            </button>
            <button
              onClick={() => setActiveTab("interior")}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "interior" ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t('carDetail.interior')}
            </button>
            {has3DModel && (
              <button
                onClick={() => setActiveTab("3d")}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeTab === "3d" ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Box className="w-4 h-4" />
                3D
              </button>
            )}
          </div>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Manufacturer Selection - At Top */}
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-padding py-4 bg-secondary/50"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 overflow-x-auto pb-2 md:pb-0 px-4 md:px-0 hide-scrollbar w-full md:w-auto">
              {availableManufacturers.map((mfr) => (
                <Link
                  key={mfr}
                  to={`/${carType}/${variant}/${mfr}`}
                  className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex-shrink-0"
                >
                  {mfr === manufacturer && (
                    <motion.div
                      layoutId="activeCountry"
                      className="absolute inset-0 gradient-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 whitespace-nowrap ${mfr === manufacturer ? "text-primary-foreground" : "text-foreground hover:text-gold"
                      }`}
                  >
                    {getManufacturerName(mfr)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Car Image/3D Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-video w-full overflow-hidden bg-gradient-to-b from-secondary to-background"
        >
          {activeTab === "3d" && has3DModel ? (
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full" />
                </div>
              }
            >
              <Car3DViewer sketchfabId={sketchfabModelId} />
            </Suspense>
          ) : (
            <>
              <motion.img
                key={`${activeTab}-${selectedColor}-${galleryIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={currentImage}
                alt={getCarName()}
                className="w-full h-full object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Gallery Navigation for BB Saudi White */}
              {hasGallery && (
                <>
                  <button
                    onClick={isRTL ? nextImage : prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-colors z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={isRTL ? prevImage : nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Gallery Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {currentGallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setGalleryIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === galleryIndex ? "bg-gold w-6" : "bg-foreground/30 hover:bg-foreground/50"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </motion.section>

        {/* Color Selection */}
        {activeTab === "exterior" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-padding py-6 border-b border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-3">{t('carDetail.selectColor')}</p>
            <div className="flex items-center gap-3">
              {carData.colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all ${selectedColor === index
                    ? "border-gold scale-110 ring-2 ring-gold/50"
                    : "border-border hover:border-muted-foreground"
                    }`}
                  style={{ backgroundColor: color.hex }}
                  title={getTranslatedColorName(color.name, t)}
                >
                  {selectedColor === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Check className={`w-4 h-4 ${color.hex === "#FFFFFF" ? "text-primary" : "text-foreground"}`} />
                    </motion.div>
                  )}
                </button>
              ))}
              <span className="text-sm text-foreground ms-2">{getTranslatedColorName(carData.colors[selectedColor]?.name, t)}</span>
            </div>
          </motion.section>
        )}

        {/* Car Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section-padding py-8"
        >
          <div className="container-custom max-w-4xl">
            {/* Title & Price */}
            <div className="mb-6">
              <span className="text-gold text-sm font-medium uppercase tracking-wider">
                {getManufacturerName(manufacturer || '')} {t('carDetail.edition')} • {carData.year}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">{getCarName()}</h1>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-2xl md:text-3xl font-bold text-gold">
                  {t('vehicles.contactForPrice')}
                </span>
                <span className="text-muted-foreground text-sm">{t('carDetail.startingPrice')}</span>
              </div>
              <p className="text-muted-foreground mt-3">{getCarDescription()}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">{t('carDetail.specifications')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {carData.specs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="glass-card p-4 rounded-xl"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{getTranslatedSpecLabel(spec.label, t)}</p>
                    <p className="text-foreground font-semibold">{t(`carDetail.specValues.${spec.value}`, spec.value)}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="lg" className="flex-1" asChild>
                <a href="tel:0533335911">
                  <Phone className="w-4 h-4 me-2" />
                  {t('carDetail.callToEnquire')}
                </a>
              </Button>
              <Button variant="gold-outline" size="lg" className="flex-1" asChild>
                <a href="https://snapchat.com/t/ALdWyHs7" target="_blank">
                  <svg className="w-4 h-4 me-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206 1c.925.007 2.87.158 4.387 1.702.953.97 1.437 2.335 1.437 4.062 0 .264-.013.76-.04 1.252-.022.413-.049.81-.076 1.135a.443.443 0 00.188.4c.115.08.27.12.426.12.202 0 .454-.069.695-.154.166-.058.32-.094.47-.094.273 0 .508.09.7.266.284.263.35.632.301.883-.095.498-.403.874-.916 1.12-.11.052-.4.164-.656.26-.48.18-.634.238-.732.314-.186.145-.22.328-.214.425.017.315.227.782.609 1.345.609.9 1.461 1.975 2.826 2.432.145.048.387.153.42.413.037.294-.2.558-.378.707-.481.404-1.1.633-1.908.766-.098.015-.178.117-.2.255-.03.177-.08.355-.147.533-.118.312-.324.378-.553.378-.142 0-.297-.032-.476-.076a5.058 5.058 0 00-1.097-.157c-.234 0-.45.022-.66.064-.408.086-.765.339-1.188.644-.697.5-1.564 1.123-3.022 1.123-.044 0-.089-.001-.134-.004-.038.003-.082.004-.124.004-1.458 0-2.324-.623-3.022-1.123-.423-.305-.78-.558-1.188-.644a3.294 3.294 0 00-.66-.064c-.394 0-.765.08-1.097.157-.179.044-.334.076-.476.076-.229 0-.435-.066-.553-.378a2.458 2.458 0 01-.147-.533c-.022-.138-.102-.24-.2-.255-.808-.133-1.427-.362-1.908-.766-.178-.149-.415-.413-.378-.707.033-.26.275-.365.42-.413 1.365-.457 2.217-1.532 2.826-2.432.382-.563.592-1.03.609-1.345.006-.097-.028-.28-.214-.425-.098-.076-.252-.134-.732-.314-.256-.096-.545-.208-.655-.26-.514-.246-.822-.622-.917-1.12-.05-.251.017-.62.301-.883.192-.177.427-.266.7-.266.15 0 .304.036.47.094.241.085.493.154.695.154.156 0 .311-.04.426-.12a.443.443 0 00.188-.4c-.027-.325-.054-.722-.076-1.135-.027-.492-.04-.988-.04-1.252 0-1.727.484-3.091 1.437-4.062C9.336 1.158 11.281 1.007 12.206 1z" />
                  </svg>
                  {t('carDetail.snapchat')}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CarDetailPage;
