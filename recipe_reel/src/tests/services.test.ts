import { fetchRecipes } from "../services";

beforeAll(() => {
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('fetchRecipes', () => {
   it('should fetch recipes successfully', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ results: [{ id: 1, title: 'Test Recipe', image: 'test_image_url' }] }),
        });

        const recipes = await fetchRecipes(5, 0);
        expect(recipes).toEqual([{ id: 1, title: 'Test Recipe', image: 'test_image_url' }]);
        expect(fetch).toHaveBeenCalledWith(
            expect.anything()
        );
    });


    it('should handle fetch errors', async () => {
        (fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

        await expect(fetchRecipes(5, 0)).rejects.toThrow('Network error');
    });
});