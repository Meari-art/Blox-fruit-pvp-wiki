const CONTRIBUTION_XP = 25;
const APPROVAL_BONUS = 15;
const LEVEL_STEP = 100;

export function computeWeightedVote(score: number, reputationPoints: number) {
  const trustMultiplier = Math.min(2.5, 1 + reputationPoints / 500);
  return Number((score * trustMultiplier).toFixed(2));
}

export function getNextLevelThreshold(level: number) {
  return level * LEVEL_STEP;
}

export function scoreContribution(approved: boolean) {
  return approved ? CONTRIBUTION_XP + APPROVAL_BONUS : CONTRIBUTION_XP;
}
