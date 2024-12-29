// const User = require("../Model/User");
// const { Router } = require("express");
const db = require("../db/_db");
const { PrismaClient } = require("@prisma/client");
// const { Game } = require("../prisma/schema.prisma");
const prisma = new PrismaClient();
// Like Contrllers
const resolvers = {
  Query: {
    games() {
      return prisma.game.findMany();
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    game(_, args) {
      // console.log(args);
      return db.games.find((game) => game.id === args.id);
    },
    author(_, args) {
      // console.log(args);
      return db.authors.find((author) => author.id === args.id);
    },
    review(_, args) {
      // console.log(args);
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      console.log(parent);
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    game: (parent) => {
      console.log(parent);
      return db.games.find((game) => game.id === parent.game_id);
    },
    author: (parent) => {
      return db.authors.find((author) => author.id === parent.author_id);
    },
  },
  Mutation: {
    deleteGame: (_, args) => {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    async addGame(_, { game }) {
      const newGame = await prisma.game.create({
        data: {
          title: game.title, // مباشرة من game object
          platform: game.platform, // مباشرة من game object
        },
      });
      return newGame;
    },
    updateGame(_, args) {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edits };
        }
        return game;
      });
      return db.games.find((game) => game.id === args.id);
    },
  },
};
module.exports = resolvers;
