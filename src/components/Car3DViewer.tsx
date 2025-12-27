import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import { Loader2, Box } from 'lucide-react';

interface Car3DViewerProps {
  modelPath?: string;
  sketchfabId?: string;
}

function CarModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
        <span className="text-sm text-muted-foreground">Loading 3D Model...</span>
      </div>
    </div>
  );
}

// Sketchfab embed viewer
function SketchfabViewer({ sketchfabId }: { sketchfabId: string }) {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <iframe
        title="LX 600 3D Model"
        className="w-full h-full min-h-[400px] rounded-xl"
        src={`https://sketchfab.com/models/${sketchfabId}/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0`}
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
}

// Placeholder for when no model is available
function ModelPlaceholder() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-gradient-to-b from-secondary to-background rounded-xl overflow-hidden flex items-center justify-center">
      <div className="text-center px-6">
        <Box className="w-16 h-16 mx-auto mb-4 text-gold opacity-50" />
        <h3 className="text-lg font-semibold text-foreground mb-2">3D Model Coming Soon</h3>
        <p className="text-sm text-muted-foreground">
          Interactive 3D view will be available shortly
        </p>
      </div>
    </div>
  );
}

const Car3DViewer = ({ modelPath, sketchfabId }: Car3DViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  // If Sketchfab ID is provided, use Sketchfab embed
  if (sketchfabId) {
    return <SketchfabViewer sketchfabId={sketchfabId} />;
  }

  // If no model path, show placeholder
  if (!modelPath) {
    return <ModelPlaceholder />;
  }

  // If there was an error loading the model
  if (hasError) {
    return <ModelPlaceholder />;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] bg-gradient-to-b from-secondary to-background rounded-xl overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [5, 2, 5], fov: 45 }}
          style={{ background: 'transparent' }}
          onError={() => setHasError(true)}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <Suspense fallback={null}>
            <CarModel modelPath={modelPath} />
          </Suspense>
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Car3DViewer;
