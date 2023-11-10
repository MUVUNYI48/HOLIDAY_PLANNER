import express from 'express';
import { pagination } from '../controllers/Pagination/pagination';

export const pageRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       scheme: bearer
 *       type: http
 *       bearerFormat: JWT
 * 
 *   schemas:
 *     TourPaginations:
 *       type: object
 *       properties:
 *         destination:
 *           type: string
 *         backdropImage:
 *           type: string
 *           format: binary
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         duration:
 *           type: string
 *         groupSize:
 *           type: string
 *         price:
 *           type: string
 *         discount:
 *           type: string
 *         tourType:
 *           type: string
 *         departure:
 *           type: string
 *         seats:
 *           type: string
 *         fromMonth:
 *           type: string
 *         toMonth:
 *           type: string
 *         departureTime:
 *           type: string
 *         returnTime:
 *           type: string
 *         gallery:
 *           type: array
 *           items:
 *            type: file
 *            format: binary
 *
 *
 * /api/v1/page/tour:
 *  get:
 *    tags: [TourPaginations]
 *    summary: this about tour pagination
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: page
 *        required: true
 *        description: page number
 *        schema:
 *          type: number 
 *      - in: query
 *        name: limit
 *        required: true
 *        description: number of tour per page
 *        schema:
 *          type: number 
 * 
 *    responses:
 *       '200':
 *         description: page found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourPaginations'
 *       '404':
 *         description: Tour not found
 */

pageRouter.get('/tour', pagination);

