const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('QuizFetcherのクラス', () => {
    describe('fetchメソッドの挙動確認', () => {
        it('fetchメソッドという名前のクラスメソッドを持つ', () => {
            assert.equal(typeof QuizFetcher.fetch, 'function');
        });

        it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {
            //  results プロパティはは10件データをもつ配列である
            const response = await QuizFetcher.fetch();
            const results = response.results;
            assert.equal(Array.isArray(results), true);
            assert.equal(results.length, 10);

            // resultsプロパティは以下の文字列型を持つ
            results.forEach(result => {
                assert.equal(typeof result.category, 'string');
                assert.equal(typeof result.type, 'string');
                assert.equal(typeof result.difficulty, 'string');
                assert.equal(typeof result.question, 'string');
                assert.equal(typeof result.correct_answer, 'string');

                // incorrect_answers プロパティ : 3件の文字列を含む配列
                assert.equal(Array.isArray(result.incorrect_answers), true);
                assert.equal(result.incorrect_answers.length, 3);

                result.incorrect_answers.forEach(answer => {
                    assert.equal(typeof answer, 'string');
                });
            });
        });

        it('【Promise版】fetchメソッドの戻り値の型チェック', () => {
            return QuizFetcher
                .fetch()
                .then(response => {
                    //  results プロパティはは10件データをもつ配列である
                    const results = response.results;
                    assert.equal(Array.isArray(results), true);
                    assert.equal(results.length, 10);

                    // resultsプロパティは以下の文字列型を持つ
                    results.forEach(result => {
                        assert.equal(typeof result.category, 'string');
                        assert.equal(typeof result.type, 'string');
                        assert.equal(typeof result.difficulty, 'string');
                        assert.equal(typeof result.question, 'string');
                        assert.equal(typeof result.correct_answer, 'string');

                        // incorrect_answers プロパティ : 3件の文字列を含む配列
                        assert.equal(Array.isArray(result.incorrect_answers), true);
                        assert.equal(result.incorrect_answers.length, 3);

                        result.incorrect_answers.forEach(answer => {
                            assert.equal(typeof answer, 'string');
                        });
                    });
                });
        });

        it('【コールバック(done)版】fetchメソッドの戻り値の型チェック', (done) => {
            QuizFetcher
                .fetch()
                .then(response => {
                    //  results プロパティはは10件データをもつ配列である
                    const results = response.results;
                    assert.equal(Array.isArray(results), true);
                    assert.equal(results.length, 10);

                    // resultsプロパティは以下の文字列型を持つ
                    results.forEach(result => {
                        assert.equal(typeof result.category, 'string');
                        assert.equal(typeof result.type, 'string');
                        assert.equal(typeof result.difficulty, 'string');
                        assert.equal(typeof result.question, 'string');
                        assert.equal(typeof result.correct_answer, 'string');

                        // incorrect_answers プロパティ : 3件の文字列を含む配列
                        assert.equal(Array.isArray(result.incorrect_answers), true);
                        assert.equal(result.incorrect_answers.length, 3);

                        result.incorrect_answers.forEach(answer => {
                            assert.equal(typeof answer, 'string');
                        });
                    });
                    done();
                });
        });
    });

});