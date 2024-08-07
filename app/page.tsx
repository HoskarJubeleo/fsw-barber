import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-items"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularybarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  console.log({ barbershops })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jamal190</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        <div className="flex items-center gap-2">
          <Input placeholder="Pesquisar" />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="[&:: -webkit-scrollbar]:hidden mt-6 flex gap-3 overflow-x-scroll">
          <Button className="gap-2" variant="secondary">
            <Image alt="Cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image alt="Barbar" src="/barba.svg" width={16} height={16} />
            Barbar
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="Acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="Sobrancelha"
              src="/sobrancelha.svg"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamento
        </h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm">Barbearia Jamelao</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {popularybarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">© 2023 Copyright</p>
            <span className="font-bold">FSW Barber</span>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
