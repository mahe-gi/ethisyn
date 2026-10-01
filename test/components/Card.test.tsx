import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";

describe("Card Component Family", () => {
  it("renders card content, title, and description", () => {
    render(
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Autonomous Architecture</CardTitle>
          <CardDescription>Sub-second DAG graph orchestration</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main content inside card</p>
        </CardContent>
        <CardFooter>
          <span>Footer metadata</span>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Autonomous Architecture")).toBeInTheDocument();
    expect(screen.getByText("Sub-second DAG graph orchestration")).toBeInTheDocument();
    expect(screen.getByText("Main content inside card")).toBeInTheDocument();
    expect(screen.getByText("Footer metadata")).toBeInTheDocument();
  });
});
