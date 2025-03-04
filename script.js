document.addEventListener("DOMContentLoaded", function() {
    var citations = [
        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
        "Le plus grand risque est de ne prendre aucun risque. Dans un monde qui change très rapidement, la seule stratégie qui est vouée à l'échec est de ne pas prendre de risques. - Mark Zuckerberg",
        "Le succès c’est tomber sept fois, se relever huit. - Proverbe japonais",
        "Le succès c’est d’aller d’échec en échec sans perdre son enthousiasme. - Winston Churchill",
        "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. - Georges Clemenceau",
        "Le seul endroit où le succès précède le travail est dans le dictionnaire. - Vidal Sassoon",
        "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalai Lama",
        "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre. - Steve Jobs",
        "Le meilleur moyen de prédire l'avenir est de le créer. - Peter Drucker",
        "Ne jugez pas chaque jour à la récolte que vous faites mais aux graines que vous semez. - Robert Louis Stevenson",
        "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
        "La meilleure façon de prédire l'avenir est de l'inventer. - Alan Kay",
        "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
        "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. - John Lennon",
        "Le seul moyen de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
        "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute. - Nelson Mandela",
        "Il n'y a pas de passion à vivre une petite vie. - Nelson Mandela",
        "L’obstacle est le chemin. - Zen Proverb",
        "Les rêves ne fonctionnent que si vous travaillez dur. - John C. Maxwell",
        "Soyez vous-même, les autres sont déjà pris. - Oscar Wilde",
        "La vie est courte. Fais-en sorte qu'elle compte. - Unknown",
        "Le voyage de mille lieues commence par un pas. - Lao Tzu",
        "Ne jugez pas chaque jour à la récolte que vous faites mais aux graines que vous semez. - Robert Louis Stevenson",
        "Ce qui ne me tue pas me rend plus fort. - Friedrich Nietzsche",
        "Tout ce dont vous avez besoin est déjà en vous. - Buddha",
        "Le seul vrai voyage, ce ne serait pas de chercher de nouveaux paysages, mais d’avoir de nouveaux yeux. - Marcel Proust",
        "Faites de votre vie un rêve, et d’un rêve, une réalité. - Antoine de Saint-Exupéry",
        "Rien n’est impossible, l’impossible prend juste plus de temps. - Dan Brown",
        "Tout ce que l’esprit de l'homme peut concevoir et croire, il peut l'accomplir. - Napoleon Hill",
        "La vie n’est pas de trouver ce que vous cherchez, mais de chercher ce que vous ne connaissez pas. - Unknown",
        "Ne pas essayer est l'échec en soi. - Unknown",
        "L’imagination est plus importante que le savoir. - Albert Einstein",
        "Ne vous inquiétez pas de l’échec. Vous ne devez réussir qu’une seule fois. - Drew Houston",
        "Celui qui déplace une montagne commence par enlever les petites pierres. - Confucius",
        "Tout ce que vous avez toujours voulu est de l'autre côté de la peur. - George Addair",
        "Le plus grand plaisir dans la vie est de réaliser ce que les autres vous disent que vous ne pouvez pas faire. - Walter Bagehot"
    ];

    document.getElementById("click").addEventListener("click", function() {
        var citationAleatoire = Math.floor(Math.random() * citations.length);
        document.querySelector(".citation").textContent = citations[citationAleatoire];
    });
});
