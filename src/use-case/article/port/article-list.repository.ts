import Article from "../entity/article";

export default interface ArticleList {
    get(slug?: string): Promise<Article[] | Article | undefined>;
    getAll(): Promise<Article[] | undefined>;
    save(article: Article): Promise<Article>;
    delete(slug?: string): Promise<void>
    persist(): Promise<void>;
    rollback(): Promise<void>;
}
