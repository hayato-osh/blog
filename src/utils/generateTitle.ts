import { config } from "@/config";

export const generateTitle = (leftTitle: string, rightTitle = config.title) =>
	`${leftTitle} | ${rightTitle}`;
