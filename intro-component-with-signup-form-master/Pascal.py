def Pascal(filas):
    row = [0,1,0]
    
    for _ in range(filas):
        next_row = [0]
        print(row[1:-1])
        for k in range(len(row)-1):
            next_row.append(row[k]+row[k+1])

        next_row.append(0)
        row = next_row


Pascal(10)