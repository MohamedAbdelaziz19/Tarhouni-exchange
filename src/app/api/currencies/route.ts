//api/currencies/route.ts 
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    console.log("🌍 DATABASE_URL:", process.env.DATABASE_URL); // 🔥 Ajout du log

    await prisma.$connect();
    console.log("✅ Connexion à Prisma réussie !"); // 🔥 Log pour vérifier Prisma

    const devises = await prisma.devise.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(devises);
  } catch (error) {
    console.error("❌ Erreur API /api/currencies :", error); // 🔥 Log de l'erreur
    return NextResponse.json(
      { message: "Erreur lors de la récupération", error },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.code || !body.nom || !body.unite || !body.achat || !body.vent) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const createdDevise = await prisma.devise.create({
      data: {
        code: body.code,
        nom: body.nom,
        unite: body.unite,
        achat: body.achat,
        vent: body.vent,
      },
    });

    console.log("Devise créée :", createdDevise);

    return NextResponse.json({
      message: "Devise ajoutée",
      currency: createdDevise,
    });
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout", error: error },
      { status: 500 }
    );
  }
}


//PUT
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    console.log("Données reçues pour la mise à jour :", body);

    if (!body.id) {
      return NextResponse.json(
        { message: "L'id est requis pour la mise à jour" },
        { status: 400 }
      );
    }
    
    const updatedDevise = await prisma.devise.update({
      where: { id: body.id },
      data: {
        nom: body.nom,
        unite: body.unite,
        achat: body.achat,
        vent: body.vent,
      },
    });

    console.log("Devise mise à jour :", updatedDevise);
    return NextResponse.json({
      message: "Devise mise à jour avec succès",
      currency: updatedDevise,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return NextResponse.json(
      { message: "Erreur lors de la mise à jour", error: error },
      { status: 500 }
    );
  }
}


// DELETE: Supprimer une devise existante
export async function DELETE(req: Request) {
  try {
    // On attend l'id en paramètre via l'URL ou dans le body (ici, nous le récupérons depuis le body)
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "L'id est requis pour la suppression" },
        { status: 400 }
      );
    }

    const deletedDevise = await prisma.devise.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Devise supprimée avec succès",
      currency: deletedDevise,
    });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return NextResponse.json(
      { message: "Erreur lors de la suppression", error: error },
      { status: 500 }
    );
  }
}

