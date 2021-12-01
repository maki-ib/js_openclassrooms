export class Book {
    constructor(title, author, description, pages, curentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.curentPage = curentPage;
        this.read = read;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.curentPage = page;
            return 1;
        } else {
            this.curentPage = page;
            this.read = true;
            return 1;
        }
    }
}
const book1 = new Book("Les bouts de bois de Dieu", "Ousmane SEMBENE", "Il décrit la grève que menèrent en 1947 les cheminots africains de la ligne Dakar-Niger, du temps de la colonisation française.", 416, 5, false);
const book2 = new Book("Une si longue lettre", "Mariama Bâ", "Ramatoulaye, mère de 12 enfants, profite de son temps de veuvage pour écrire une longue lettre à son amie Aïssatou installée aux Etats-Unis.", 176, 1, false);
const book3 = new Book("Une vie de boy", "Ferdinand OYONo", "Une vie de boy de Ferdinand oyono est une œuvre qui nous relate l'histoire d'un jeune nègre du nom de Toundi Ondoua qui s'enfuit vers Fia où se trouvait le Père Gilbert à la suite d'une bastonnade infligée par son père. Celui-ci le conduit à l'église Saint Pierre de Dangan oú il devient le serva't de messe et son boy. Il le baptisa sous le nom de Joseph et lui apprit à lire et à écrire. Aprés la mort du Père Gilbert, il devient le boy du commandant. Là il commence une nouvelle vie mais sera confronté plus tard à de multiples problèmes qui le conduiront jusqu'à sa mort à la suite d'un vol commis par sa camarade Sophie, la maîtresse de l'ingénieur agricole.", 192, 5, false);
const book4 = new Book("Un piège sans fin", "Olympe Bhêly-Quénum ", " Ce roman, classique de forme, est celui d’une vie, celle d’un être beau, juste, innocent, musicalement accordé à lui-même et au monde, jusqu’au jour où une dissonance défait cette existence harmonieuse. Événement dérisoire : le fantasme d’une femme, mais tel est le piège qui fait qu’à l’harmonie succèdent l’absurde et l’errance, le chaos et le crime, pour s’achever dans le supplice et la mort. Symbole remarquable, c’est par le feu purificateur que périt cet innocent pathétique.", 283, 5, false);
export const books = [book1, book2, book3, book4];