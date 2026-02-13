import { computeWeightedVote } from "@/lib/reputation";

export function calculateTierScore(votes: Array<{ score: number; reputationPoints: number }>) {
  if (!votes.length) return { weightedAverage: 0, tier: "C", isMetaCurrent: false };

  const weightedScores = votes.map((vote) => computeWeightedVote(vote.score, vote.reputationPoints));
  const weightedAverage = weightedScores.reduce((acc, value) => acc + value, 0) / weightedScores.length;

  const tier =
    weightedAverage >= 4.3 ? "S" :
    weightedAverage >= 3.7 ? "A" :
    weightedAverage >= 3.0 ? "B" :
    weightedAverage >= 2.0 ? "C" : "D";

  return {
    weightedAverage: Number(weightedAverage.toFixed(2)),
    tier,
    isMetaCurrent: weightedAverage >= 3.7
  };
}
