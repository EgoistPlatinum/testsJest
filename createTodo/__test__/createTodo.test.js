import {createTodo, createTodoServer} from '../createTodo'

const mockTodo = {id: 1, title: "Todo 1", completed: false}
const mockedV4 = jest.fn(() => 'abcd')

jest.mock('uuid', () => ({
  // ...jest.requireActual('uuid'),
  v4: () => mockedV4()
}))

global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodo)
  })
)

describe('createTodo', () => {

  afterEach(() => jest.clearAllMocks())

  it('should return todo object with provided title, completed and id', () => {
    const title = 'Learn jest'
    const expectedResult = {
      title,
      completed: false,
      id: 'abcd'
    }
    const result = createTodo(title)

    expect(mockedV4).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedResult)
  })

  it('should  throw an error when no valid title is provided', () => {
    const fnToThrow = () => createTodo('')

    expect(fnToThrow).toThrow('title is not required!')
  })


  // it('should  throw an error when no valid title is provided', (done) => {
  //   try {
  //     createTodoServer('')
  //     done('createTodo should throw an error for invalid values')
  //   } catch (error) {
  //     expect(error.message).toBe('title is not required!')
  //     done()
  //   }
  // })


  it('should create todo on server', async () => {
    const result = await createTodoServer('my todo')

    expect(result).toEqual(mockTodo)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  it('should throw an error if there is a network error', async () => {
    fetch.mockRejectedValueOnce('Network error')

    await expect(createTodoServer('my todo')).rejects.toMatch('Network error')
  })

  it('should throw error from fn when response not ok', async () => {
    fetch.mockResolvedValueOnce({ok: false})

    // await expect(createTodoServer('my todo')).rejects.toMatch('Cannot create todo')


    const fnToThrow = () => createTodoServer('my todo')


    expect(fnToThrow).rejects.toThrow("Cannot create todo")
  })
})