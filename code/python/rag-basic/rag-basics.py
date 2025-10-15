import marimo

__generated_with = "0.16.5"
app = marimo.App(width="medium")


@app.cell
def _():
    from openai import OpenAI
    client = OpenAI()

    response = client.responses.create(
        model="gpt-5",
        input="What can you tell me about Idagunji temple in Honnavara ?"
    )

    print(response.output_text)
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
