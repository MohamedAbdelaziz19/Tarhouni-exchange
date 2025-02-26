export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative flex items-center justify-center">
                {/* Cercle de chargement */}
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-50"></div>
                
                {/* Cercle intérieur pour l'effet de profondeur */}
                <div className="absolute rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
            </div>
        </div>
    );
}
