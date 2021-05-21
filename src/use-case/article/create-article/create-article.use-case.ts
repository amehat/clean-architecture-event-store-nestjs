import { Inject } from "@nestjs/common";

import ArticleList from "../port/article-list.repository";
import CreateArticlePresenter from "./create-article.presenter";
import CreateArticleRequest from "./create-article.request";
import CreateArticleResponse from "./create-article.response";

export default class CreateArticle {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    async execute(articleRequest: CreateArticleRequest, createArticlePresenter: CreateArticlePresenter): Promise<void> {
        const { response } = createArticlePresenter;

        // article doit être un aggregate
        // article doit être enregistré dans un store
        const article = await this.articleList.save(articleRequest);

        if (article !== undefined) {
            response.article = article;
        } else {
            response.errors = ['error creating article'];
        }
    }
}
