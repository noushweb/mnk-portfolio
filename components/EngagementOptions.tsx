export default function EngagementOptions({ market }: { market: string }) {
  return (
    <section aria-labelledby="engagement-options" className="space-y-6">
      <h2 id="engagement-options" className="text-2xl font-medium">
        How we can work together
      </h2>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">
        From Kerala, based in Dubai for 11 years. I work with teams in {market}
        {" "}on focused UX reviews, product design, and design systems. We agree the
        scope and first deliverable before work begins.
      </p>
      <ul className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
        <li>
          <strong>UX review:</strong> review an existing journey or dashboard.
          A first deliverable can be a prioritised findings list with recommended fixes.
        </li>
        <li>
          <strong>Product design:</strong> define a new feature or MVP journey,
          then work through UI and prototyping. Start with a user-flow map and wireframes.
        </li>
        <li>
          <strong>Design systems:</strong> review UI consistency, components,
          and developer handoff. Start with a component inventory and a plan for gaps.
        </li>
      </ul>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">
        Share your product, the users it serves, the problem to solve, and any
        existing designs or code. Use the form below to discuss the right starting point;
        budget, schedule, and collaboration arrangements depend on the agreed scope.
      </p>
      <a
        href="#project-enquiry"
        className="inline-block font-medium text-[var(--color-accent)] hover:underline"
      >
        Discuss your project in {market} →
      </a>
    </section>
  );
}
