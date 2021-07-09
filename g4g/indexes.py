v = [1, 3, 5, 5, 5, 5 ,67,123,123]

def indexesSearch(array, num):
    '''Searches Index of first occurence and last occcurence of an element in an array'''
    if num in array:
        first = array.index(num)
        array.reverse()
        index = array.index(num)
        last = len(array) - index - 1
        return(first, last)
    else:
        return({-1, 1})

print(indexesSearch(v, 5))