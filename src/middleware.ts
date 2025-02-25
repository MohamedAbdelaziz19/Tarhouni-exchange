import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  try {
    // Exemple de vérification conditionnelle
    if (req.url.includes('/api/currencies')) {
      // Par exemple, vous pouvez vérifier une entête ou un paramètre
      // const token = req.headers.get('x-api-token');
      // if (!token || token !== process.env.API_TOKEN) {
      //   return new Response('Accès non autorisé', { status: 401 });
      // }
      // Sinon, vous ne lancez pas d'erreur
    }
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return new Response('Erreur interne du serveur', { status: 500 });
  }
}

export const config = {
  matcher: ['/api/:path*'],
};
